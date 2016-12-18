import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import DropdownTable from './DropdownTable';

interface IDropdownWrapperProps {
    selectItem?: (item: any) => void;
    dataSource?: Array<any> | Object;
    onRowSelect?: (item: any) => void;
    selected?: Array<any>;
    material?: boolean;
    open?: boolean;
    width?: string;
    searchableKeys?: Array<any>;
    selectedElements?: Array<any>;
    selectedKey?: string;
    mobile?: boolean;
    toggleOpen?: any;
    title?: string;
    hideHeader? : boolean;
}

export default class DropdownWrapper extends React.Component<IDropdownWrapperProps, {}> {
  selectItem(item) {
    this.props.selectItem(item);
    }
  titleTemplate() {
      let props = this.props;
      let {title} = props;
      return (
          <Toolbar left>
              <Button simple onClick={props.toggleOpen}>{title}</Button>
          </Toolbar>
      )
  }
  menuTemplate() {
      let props = this.props;
      let {toggleOpen} = props;
      return (
          <Toolbar right className={props.hideHeader ? "r-fixed" : ''}>
              <Button className="ps15" simple icon="times" onClick={props.toggleOpen}/>
          </Toolbar>
      )
  }
  render() {

    const self = this;
    const props = self.props;

    let DropdownContent;

    if (props.dataSource) {
      DropdownContent = <DropdownTable {...props} />;
    } else {
      DropdownContent = props.children;
    }

    return(
      <div style={!props.mobile ? {width : this.props.width} : {width: '100%', height: '100%'}} className={props.mobile ? "e-flex fill": "r-DropdownWrapper"}>
            {!props.mobile && !props.hideHeader ? 
                <Toolbar block className="r-Dropdown__header" onClick={props.toggleOpen}>
                    {this.titleTemplate()}
                    {this.menuTemplate() }
                </Toolbar>
                : 
                null
            }

            {!props.mobile && props.hideHeader ? 
                this.menuTemplate()
                : 
                null
            }
            {DropdownContent}
      </div>
    );
  }
}
