import * as React from 'react';
import * as classNames from 'classnames';
import DropdownWrapper from './DropdownWrapper';
import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import './Dropdown.less';

export interface IDropdownProps {
  from ? : string;
  block ? : boolean;
  right? : boolean;
  left ? : boolean;
  className? : any;
  contentClass? : string;
  buttonClass? : string;
  selectionClass? : string;
  data? : any;
  children ? : any;
  type ? : string;
  icon ? : string;
  title ? : string;
  ghost ? : boolean;
  theme ? : string;
  value ? : any;
  onSelected ? : any;
  checked ? : boolean;
}

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

      <i className={'r-DropdownHeader__trigger fa fa-chevron-'+((props.from === 'top' || props.from === 'top left' || props.from === 'top right' || props.from === 'top center') ? 'up' : 'down')}></i>
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

export default class Dropdown extends React.Component<IDropdownProps, any>{
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
      {'dblock' : (props.block)},
      {'pull-right' : (props.right)},
      {'pull-left' : (props.left)},
      props.className
    );

    let dropdownWrapperBottomClass = classNames(
      'r-DropdownWrapperBottom',
      'e-drop-b',
      {'e-drop-left': (props.from === 'bottom left')},
      {'e-drop-right': (props.from === 'bottom right')},
      {'e-drop-center': (props.from === 'bottom center')},
      props.contentClass
    );

    let dropdownWrapperTopClass = classNames(
      'r-DropdownWrapperTop',
      'e-drop-t',
      {'e-drop-left': (props.from === 'top left')},
      {'e-drop-right': (props.from === 'top right')},
      {'e-drop-center': (props.from === 'top center')},
      props.contentClass
    );

    let dropdownContentClass = classNames(
      'r-DropdownContent',
      'r-Card',
      'w100',
      props.contentClass
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
        {dropdownTypePartial}
        {(()=>{
          if (props.from === 'top' || props.from === 'top left' || props.from === 'top right' || props.from === 'top center') {
            return <DropdownWrapper type={props.type} selectedItem={state.selectedItem} checked={state.selectedItem > 0} selectItem={self.selectItem.bind(self)} data={props.data} filterText={state.filterText} dropdownWrapperClass={dropdownWrapperTopClass} dropdownContentClass={dropdownContentClass}>{props.children}</DropdownWrapper>;
          } else {
            return <DropdownWrapper type={props.type} selectedItem={state.selectedItem} checked={state.selectedItem > 0} selectItem={self.selectItem.bind(self)} data={props.data} filterText={state.filterText} dropdownWrapperClass={dropdownWrapperBottomClass} dropdownContentClass={dropdownContentClass}>{props.children}</DropdownWrapper>;
          }
        })()}
      </div>
    );
  }
}
