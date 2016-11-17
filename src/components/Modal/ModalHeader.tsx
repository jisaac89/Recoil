import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

export default class ModalHeader extends React.Component<any, any>{
    toggleMin() {
        this.props.toggleMin();
    }
    render() {

        let props = this.props;
        let iconPartial, fullScreenPartial;

        props.icon ? (iconPartial = <i className={'pull-left mt10 fa fa-'+props.icon}></i>) : null;
        props.fullScreen ? (fullScreenPartial = <Button simple className="pull-right " size="small" onClick={this.toggleMin.bind(this)} icon={this.props.min ? 'expand' : 'compress'} />) : null;

        if (props.open && (props.title || props.fullScreen)) {
            return (
                <Toolbar block flush noRadius className="r-Modal__header border-bottom clearfix">
                    {props.title ? <div>
                        {iconPartial}
                        <h1 className="dinblock"> {props.title} </h1>
                    </div> : null}
                    <Button simple size="small" className="pull-right" onClick={props.onClose} icon="times" />
                    {fullScreenPartial}
                </Toolbar>
            );
        } else return null;
    }
}