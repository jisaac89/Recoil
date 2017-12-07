import * as React from 'react';

// State of the HOC you need to compute the InjectedProps
interface State {
    start : {time ?: number; x?: number; y?: number},
    diff : {x: number ; y: number; time: number},
    speed: Object,
    stack: Array<any>,
    listeners: Array<any>,
    clicksAllowed: boolean,
    eventType : any,
    isScrolling : boolean
}

// Props you want the resulting component to take (besides the props of the wrapped component)
interface ExternalProps {
    preventScroll: boolean,
    clickTolerance : any;
    mouse: boolean,
    preventDefault: any,
    start: any,
    move: any,
    end: any,
    click: any
}

// Props the HOC adds to the wrapped component
export interface InjectedProps {
    preventDefault: boolean,
    clickTolerance: number,
    preventScroll: boolean,
    mouse: boolean,
    start: () => void,
    move: () => void,
    end: () => void,
    click: () => void
}

// Options for the HOC factory that are not dependent on props values
interface Options {
    key?: string;
}

export const Touch = ({ key = 'Default value' }: Options = {}) =>
    <TOriginalProps extends {}>(
        Component: (React.ComponentClass<TOriginalProps & InjectedProps>
            | React.StatelessComponent<TOriginalProps & InjectedProps>)
    ) => {
        // Do something with the options here or some side effects

        type ResultProps = TOriginalProps & ExternalProps;
        const result = class YourComponentName extends React.Component<ResultProps, State> {
            // Define how your HOC is shown in ReactDevTools
            static displayName = `YourComponentName(${Component.displayName || Component.name})`;
            refs:any;
            events : Array<[string | boolean]>;
            checks : Array<any>;
            eventModel: any;

            public static defaultProps = {
                preventDefault: true,
                clickTolerance: 0,
                preventScroll: false,
                mouse: true
            };

            constructor(props: ResultProps) {
                super(props);
                this.state = {
                    start: {},
                    diff: {
                        x : 0,
                        y : 0,
                        time: 0
                    },
                    speed: {},
                    stack: [],
                    listeners: [],
                    clicksAllowed: true,
                    eventType : null,
                    isScrolling: null
                };

                let { mouse } = this.props;
                var support = {
                            pointerEvents: !!window.navigator.pointerEnabled,
                            msPointerEvents: !!window.navigator.msPointerEnabled
                        }
                this.events = [
                    ['touchstart', 'touchmove', 'touchend', 'touchcancel'], //touch events
                    ['pointerdown', 'pointermove', 'pointerup', 'pointercancel'], //pointer events
                    ['MSPointerDown', 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel'], //IE10 pointer events
                    ['mousedown', 'mousemove', 'mouseup', false] //mouse events
                ]

                this.eventModel = (support.pointerEvents? 1 : (support.msPointerEvents? 2 : 0));

                this.checks = [
                    //touch events
                    function (e) {
                        //skip the event if it's multitouch or pinch move
                        return (e.touches && e.touches.length > 1) || (e.scale && e.scale !== 1);
                    },
                    //pointer events
                    function (e) {
                        //Skip it, if:
                        //1. event is not primary (other pointers during multitouch),
                        //2. left mouse button is not pressed,
                        //3. mouse drag is disabled and event is not touch
                        return !e.isPrimary || (e.buttons && e.buttons !== 1) || (!mouse && e.pointerType !== 'touch' && e.pointerType !== 'pen');
                    },
                    //IE10 pointer events
                    function (e) {
                        //same checks as in pointer events
                        return !e.isPrimary || (e.buttons && e.buttons !== 1) || (!mouse && e.pointerType !== e.MSPOINTER_TYPE_TOUCH && e.pointerType !== e.MSPOINTER_TYPE_PEN);
                    },
                    //mouse events
                    function (e) {
                        //skip the event if left mouse button is not pressed
                        //in IE7-8 `buttons` is not defined, in IE9 LMB is 0
                        return (e.buttons && e.buttons !== 1);
                    }
                ];

            }

            componentDidMount(){
                
                this.init();
            }

            addEvent(el, event, func, bool) {
                if (!event) return;

                el.addEventListener? el.addEventListener(event, func, !!bool): el.attachEvent('on'+event, func);

                //return event remover to easily remove anonymous functions later
                return {
                    remove: function() {
                        this.removeEvent(el, event, func, bool);
                    }
                };
            }

            removeEvent(el, event, func, bool) {
                if (!event) return;

                el.removeEventListener? el.removeEventListener(event, func, !!bool): el.detachEvent('on'+event, func);
            }

            tStart(event, eType) {
                let { clicksAllowed, eventType } = this.state;
                let { preventDefault } = this.props;

                this.setState({
                    clicksAllowed : true,
                    eventType: eType
                })

                if (this.checks[eventType](event)) return;

                //attach event listeners to the document, so that the slider
                //will continue to recieve events wherever the pointer is
                this.addEvent(document, this.events[eventType][1], this.tMove);
                this.addEvent(document, this.events[eventType][2], this.tEnd);
                this.addEvent(document, this.events[eventType][3], this.tEnd);

                //fixes WebKit's cursor while dragging
                if (preventDefault && eventType) this.preventDefault(event);

                //remember starting time and position
                this.setState({
                    start : {
                        x: eventType ? event.clientX : event.touches[0].clientX,
                        y: eventType ? event.clientY : event.touches[0].clientY,
                        time: Number(new Date)
                    },
                    isScrolling : null,
                    diff : { x: 0, y: 0, time: 0 },
                    speed : { x: 0, y: 0 },
                    stack : [{ x: 0, y: 0, time: 0 }]
                });

                //reset


                this.props.start(event, this.state.start);
            }


            preventDefault(event) {
                event.preventDefault? event.preventDefault() : event.returnValue = false;
            }


            tMove(event) {
                let { checks, events } = this;
                let { clicksAllowed, eventType, isScrolling, start, diff, speed} = this.state;
                //if user is trying to scroll vertically -- do nothing
                if ((!this.props.preventScroll && isScrolling) || checks[eventType](event)) return;

                this.getDiff(event);

                if (Math.abs(diff.x) > this.props.clickTolerance || Math.abs(diff.y) > this.props.clickTolerance) clicksAllowed = false; //if there was a move -- deny all the clicks before the next touchstart

                //check whether the user is trying to scroll vertically
                if (isScrolling === undefined && eventType !== 3) {
                    //assign and check `isScrolling` at the same time
                    if (isScrolling = (Math.abs(diff.x) < Math.abs(diff.y)) && !this.props.preventScroll) return;
                }

                if (this.props.preventDefault) this.preventDefault(event); //Prevent scrolling

                this.props.move(event, start, diff, speed);
            }

            tEnd(event) {
                let { checks, events } = this;
                let { clicksAllowed, eventType, isScrolling, start, diff, speed} = this.state;
                let { preventDefault } = this.props;

                eventType && this.getDiff(event);

                //IE likes to focus links after touchend.
                //Since we don't want to disable link outlines completely for accessibility reasons,
                //we just defocus it after touch and disable the outline for `:active` links in css.
                //This way the outline will remain visible when using keyboard.
                !clicksAllowed && event.target && event.target.blur && event.target.blur();

                //detach event listeners from the document
                this.removeEvent(document, events[eventType][1], this.tMove);
                this.removeEvent(document, events[eventType][2], this.tEnd);
                this.removeEvent(document, events[eventType][3], this.tEnd);

                this.props.end(event, start, diff, speed);
            }

            init() {
                let { mouse, click} = this.props;
                let { events, tStart, preventDefault } = this;
                let { listeners, eventType, clicksAllowed } = this.state;
                const self = this;
                //bind touchstart
                listeners.push(this.addEvent.bind(this, this.refs.el, events[this.eventModel][0], function(e) {tStart.bind(self, e, this.eventModel);}));
                //prevent stuff from dragging when using mouse
                listeners.push(this.addEvent(this.refs.el, 'dragstart', this.preventDefault));

                //bind mousedown if necessary
                if (mouse && !this.eventModel) {
                    listeners.push(this.addEvent(this.refs.el, events[3][0], function(e) {tStart(e, 3);}));
                }

                //No clicking during touch
                listeners.push(this.addEvent(this.refs.el, 'click', function(event) {
                    // clicksAllowed? click(event): preventDefault(event);
                }));


                console.log(listeners);
            }

            getDiff(event) {
                let { clicksAllowed, eventType, isScrolling, start, diff, speed, stack} = this.state;
                this.setState({
                    diff : {
                        x: (eventType? event.clientX : event.touches[0].clientX) - start.x,
                        y: (eventType? event.clientY : event.touches[0].clientY) - start.y,
                        time: Number(new Date) - start.time
                    }
                })

                if (diff.time - stack[stack.length - 1].time) {
                    for (var i = 0; i < stack.length - 1 && diff.time - stack[i].time > 80; i++);

                    speed = {
                        x: (diff.x - stack[i].x) / (diff.time - stack[i].time),
                        y: (diff.y - stack[i].y) / (diff.time - stack[i].time)
                    };

                    if (stack.length >= 5) stack.shift();
                    stack.push({x: diff.x, y: diff.y, time: diff.time});
                }
            }

            // Implement other methods here
 
            render(): JSX.Element {
                // Render all your added markup
                return (
                    <div ref="el">
                        {/* render the wrapped component like this, passing the props and state */}
                        <Component {...this.props} {...this.state} />
                    </div>
                );
            }
        };

        return result;
    };