/// <reference path="../../recoil.d.ts" />

import * as React from 'react';
import * as classNames from 'classnames';
import DropdownWrapper from './DropdownWrapper';
import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import './Dropdown.less';

const DropdownHeader : any = (props) => {
  return (
    <div className="r-DropdownHeader" onClick={props.onClick}>

      {(() => {
        if (props.selectedItem.length === 0) {
          return (
            <div className="dinblock">
              <i className={'mr5 fa fa-'+props.icon}></i>
              {props.title}
            </div>
          );
        } else if (props.selectedItem) {
          return (
            <div className="dinblock">
              <i className={"mr5 fa fa-times"} onClick={props.deselectItem}></i>
              {props.selectedItem}
            </div>
          );
        }
      })()}

      <i className={'r-DropdownHeader__trigger fa fa-chevron-'+((props.from === ('top' || 'top left' || 'top right')) ? 'up' : 'down')}></i>
    </div>
  );
};

const DropdownButton : any = (props) => {
  return (
      <div className="r-DropdownButton">
        <Button
          className={props.className}
          onClick={props.onClick}
          icon={props.icon}
          checked={props.checked}
          type={props.theme}
          ghost={props.ghost}
        >
            {props.value}
        </Button>
      </div>
  );
};

const DropdownSelection : any = (props) => {
  return (
    <Layer overflow className={props.className}>
      <DropdownHeader deselectItem={props.deselectItem} selectedItem={props.selectedItem} from={props.from} onClick={props.onClick} icon={props.icon} title={props.title}></DropdownHeader>
      <Selectable checked={props.checked} />
    </Layer>
  );
};

const DropdownSearch : any = (props) => {
  return (
    <div>
      <Input className="w100" icon={props.icon} value={props.inputValue} type="text" onChange={props.onChange} title={props.title}></Input>
    </div>
  );
};

export default class Dropdown extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      selectedItem: [],
      filterText: ''
    };
  }
  toggleDrop() {
    this.setState({
      open: this.state.open ? false : true
    });
  }
  selectItem(item) {

    const self = this;
    self.setState({
      selectedItem: item,
      filterText: item
    });

    setTimeout(function () {
      self.setState({open: self.state.open ? false : true});
    }, 350);

    if (self.props.onSelected) {
      self.props.onSelected(item);
    }
  }
  deselectItem(){
    this.setState({
      selectedItem: []
    });
  }
  onChange(e) {
    const self = this;
    const props = self.props;
    this.setState({
      filterText: e,
      open: true
    });
  }
  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    let topPartial, bottomPartial, dropdownTypePartial;

    let dropdownClass = classNames(
      'r-Dropdown',
      {'e-open' : (state.open)},
      {'dblock w100' : (props.block)},
      props.className
    );

    let dropdownWrapperBottomClass = classNames(
      'r-DropdownWrapperBottom',
      {'e-resize-tl': (!props.from || props.from === 'bottom left' || props.from === 'bottom')},
      {'e-resize-tr': (props.from === 'bottom right')},
      {'e-resize-bl': (props.from === 'top left' || props.from === 'top')},
      {'e-resize-br': (props.from === 'top right')},
      {'e-resize-b': (props.block)},
      {'e-resize-t': (props.block)},
      props.contentClass
    );

    let dropdownWrapperTopClass = classNames(
      'r-DropdownWrapperTop',
      {'e-resize-tl': (!props.from || props.from === 'bottom left' || props.from === 'bottom')},
      {'e-resize-tr': (props.from === 'bottom right')},
      {'e-resize-bl': (props.from === 'top left' || props.from === 'top')},
      {'e-resize-tr': (props.from === 'top right')},
      {'e-resize-b': (props.block)},
      {'e-resize-t': (props.block)},
      props.contentClass
    );

    let dropdownContentClass = classNames(
      'r-DropdownContent',
      'r-Card',
      'w100'
    );

    let buttonClass = classNames(
      'w100',
      props.buttonClass
    );

    let selectionClass = classNames(
      'r-DropdownSelection',
      'w100',
      props.selectionClass
    );

    switch (props.from) {
      case ('top' || 'top left' || 'top right'):
        topPartial = <DropdownWrapper type={props.type} selectedItem={state.selectedItem} checked={state.selectedItem > 0} selectItem={self.selectItem.bind(self)} data={props.data} filterText={state.filterText} dropdownWrapperClass={dropdownWrapperTopClass} dropdownContentClass={dropdownContentClass}>{props.children}</DropdownWrapper>;
        bottomPartial = null;
        break;
      case ('bottom' || 'bottom left' || 'bottom right'):
        topPartial = <DropdownWrapper type={props.type} selectedItem={state.selectedItem} checked={state.selectedItem > 0} selectItem={self.selectItem.bind(self)} data={props.data} filterText={state.filterText} dropdownWrapperClass={dropdownWrapperBottomClass} dropdownContentClass={dropdownContentClass}>{props.children}</DropdownWrapper>;
        bottomPartial = null;
        break;
      default:
        bottomPartial = <DropdownWrapper type={props.type} selectedItem={state.selectedItem} checked={state.selectedItem > 0} selectItem={self.selectItem.bind(self)} data={props.data} filterText={state.filterText} dropdownWrapperClass={dropdownWrapperBottomClass} dropdownContentClass={dropdownContentClass}>{props.children}</DropdownWrapper>;
        topPartial = null;
    }

    switch (props.type) {
      case 'button':
        dropdownTypePartial = <DropdownButton className={buttonClass} onClick={self.toggleDrop.bind(self)} value={props.value} icon={props.icon} checked={state.open} theme={props.theme} ghost={props.ghost} />;
        break;
      case 'selection':
        dropdownTypePartial = <DropdownSelection deselectItem={self.deselectItem.bind(self)} selectedItem={state.selectedItem} checked={state.open} icon={props.icon} title={props.title} className={selectionClass} onClick={self.toggleDrop.bind(self)} from={props.from}></DropdownSelection>;
        break;
      case 'search':
        dropdownTypePartial = <DropdownSearch icon={props.icon} inputValue={state.filterText} onChange={self.onChange.bind(self)} title={props.title} />;
        break;
      default:
        dropdownTypePartial = null;
    }

    return (
      <div className={dropdownClass}>
        {topPartial}
        {dropdownTypePartial}
        {bottomPartial}
      </div>
    );
  }
}
