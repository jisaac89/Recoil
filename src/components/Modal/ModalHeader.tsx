import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../Button/Button';

export default class ModalHeader extends React.Component<any, any>{
    toggleMin() {
        this.props.toggleMin();
    }
    render() {

        let props = this.props;
        let iconPartial, fullScreenPartial;

        props.icon ? (iconPartial = <i className={'pull-left mt10 fa fa-'+props.icon}></i>) : null;
        props.fullScreen ? (fullScreenPartial = <Button className="pull-right " onClick={this.toggleMin.bind(this)} icon={this.state.min ? 'expand' : 'compress'} theme="link" />) : null;


        if (props.title) {
            return (
                <div className="r-Modal__header p10 border-bottom clearfix">
                    <div>
                        {iconPartial}
                        {fullScreenPartial}
                        <h1 className="dinblock pull-left"> {props.title} </h1>
                    </div>
                    <Button ghost className="pull-right" onClick={props.onClose} icon="times" theme="link" />
                </div>
            );
        }
    }
}