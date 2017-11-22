import * as React from 'react';
import { Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink } from '../../../src/index';

import TutorialView from './TutorialView';
const LayerProperties = [
  { name: 'border', type: '', options: '', description: '' },
  { name: 'overflow', type: '', options: '', description: '' },
  { name: 'left', type: '', options: '', description: '' },
  { name: 'right', type: '', options: '', description: '' },
  { name: 'scrollY', type: '', options: '', description: '' },
  { name: 'scrollX', type: '', options: '', description: '' },
  { name: 'fill', type: '', options: '', description: '' },
  { name: 'type', type: '', options: '', description: '' },
  { name: 'children', type: '', options: '', description: '' },
  { name: 'className', type: '', options: '', description: '' },
  { name: 'style', type: '', options: '', description: '' },
  { name: 'onClick', type: '', options: '', description: '' },
  { name: 'block', type: '', options: '', description: '' },
  { name: 'key', type: '', options: '', description: '' },
  { name: 'align', type: '', options: '', description: '' },
  { name: 'flex', type: '', options: '', description: '' },
  { name: 'flow', type: '', options: '', description: '' },
  { name: 'justify', type: '', options: '', description: '' }
]

export default class TutorialLayer extends React.Component<any, any>{
  constructor() {
    super();

    this.state = {
      showProps: true,
      showVideo: false,
      isFlexed: false,
      contentClosed: false,
      showSidebar: false,
      showNotify: false
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    })
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    })
  }

  toggleFlex() {
    this.setState({
      isFlexed: !this.state.isFlexed
    })
  }

  toggleContentClosed() {
    this.setState({
      contentClosed: !this.state.contentClosed
    })
  }

  toggleSidebar() {
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }

  toggleNotify() {
    this.setState({
      showNotify: !this.state.showNotify
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [
      { name: 'name', width: 120 },
      { name: 'type', width: 140 },
      { name: 'description' }
    ]
    let example = () => {
      return (
        <div>

          <h3 className="pb20">Layer</h3>

          <Toolbar spacing>
            <Checkbox size="small" checked={state.isFlexed} title={'Fill Children'} onChange={this.toggleFlex.bind(this)} />
            <Checkbox size="small" checked={state.contentClosed} title={'Hide Content'} onChange={this.toggleContentClosed.bind(this)} />
            <Checkbox size="small" checked={state.showSidebar} title={'Show Sidebar'} onChange={this.toggleSidebar.bind(this)} />
            <Checkbox size="small" checked={state.showNotify} title={'Show Notifcations'} onChange={this.toggleNotify.bind(this)} />
          </Toolbar>

          <Align className="mt20">
            <Layer className="p10 dark dinblock" dimensions={['100%', '300px', 1]}>
              <Transform fill flex={state.isFlexed} if={state.showNotify} push={'bottom'} amount={'50px'}>
                <Layer overflow theme="light" fill flex={state.isFlexed} className="p10">

                  <Transform fill flex={state.isFlexed} if={state.showSidebar} push={'left'} amount={'100px'}>
                    <Layer border flexCenter theme="dark" fill={state.isFlexed} className="p10 mb5">
                      Header
                    </Layer>

                    <Open openToHeight={!this.state.isFlexed ? '42px' : '83.33px'} if={!this.state.contentClosed}>
                      <Layer border flexCenter theme="dark" fill={state.isFlexed} className="p10 mb5">
                        Content
                      </Layer>
                    </Open>

                    <Layer border flexCenter theme="dark" fill={state.isFlexed} className="p10">
                      Footer
                    </Layer>
                  </Transform>

                  <SlideIn from={'left'} className="h100 w100px" if={this.state.showSidebar}>
                    <Layer flex fill flexCenter theme="dark" className="pr10">
                      <Layer flex fill flexCenter theme="light">

                      </Layer>
                    </Layer>
                  </SlideIn>

                </Layer>
              </Transform>
            </Layer>
            <Layer overflow className="ml10 dinblock p10 dark" dimensions={['100%', '300px', 1]}>
              <Transform fill flex={state.isFlexed} if={state.showNotify} push={'top'} amount={'50px'}>
                  
                  <SlideIn from={'top'} className="h50px w100" if={this.state.showNotify}>
                    <Layer flex fill flexCenter theme="dark" className="pt10">
                      <Layer flex fill flexCenter theme="light">
                          Notifcations
                      </Layer>
                    </Layer>
                  </SlideIn>


                <Layer overflow theme="light" fill flex={state.isFlexed} className="p10">
                  <Transform fill flex={state.isFlexed} if={state.showSidebar} push={'right'} amount={'100px'}>

                    <Open openToHeight={!this.state.isFlexed ? '38px' : state.showNotify ? '172px' : '210px'} if={!this.state.contentClosed}>
                      <Layer flex border flexCenter theme="dark" fill={state.isFlexed} className="p10 mb5">
                        Content
                      </Layer>
                    </Open>

                    <Layer border dimensions={['100%', state.contentClosed && state.isFlexed ? '100%' : '38px', 1]} flexCenter theme="dark" className="p10">
                      Footer
                    </Layer>

                  </Transform>

                  <SlideIn from={'right'} className="h100 w100px" if={this.state.showSidebar}>
                    <Layer flex fill flexCenter theme="dark" className="pl10">
                      <Layer flex fill flexCenter theme="light">

                      </Layer>
                    </Layer>
                  </SlideIn>

                </Layer>

              </Transform>

            </Layer>

          </Align>

          <h3 className="ptb20">Default</h3>
          
          <Layer className="p10 dark">
            <Layer theme="light" className="p10">

            </Layer>
          </Layer>

          <h3 className="ptb20">Filled Layer</h3>
          
          <Layer className="p10 dark" dimensions={['300px', '300px', 1]}>
            <Layer theme="light" fill className="p10">

            </Layer>
          </Layer>

        </div>
      )
    }

    return (
      <TutorialView
        description="The Layer component is an advanced version of the standard div control."
        Id="Layer"
        columnData={LayerProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
