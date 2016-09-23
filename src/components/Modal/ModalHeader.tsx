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
        props.fullScreen ? (fullScreenPartial = <Button className="pull-right " onClick={this.toggleMin.bind(this)} icon={this.props.min ? 'expand' : 'compress'} simple />) : null;

        if (props.title) {
            return (
                <div className="r-Modal__header p10 border-bottom clearfix">
                    <div>
                        {iconPartial}
                        <h1 className="dinblock"> {props.title} </h1>
                    </div>
                    <Button simple className="pull-right" onClick={props.onClose} icon="times" />
                    {fullScreenPartial}
                </div>
            );
        } else return null;
    }
}