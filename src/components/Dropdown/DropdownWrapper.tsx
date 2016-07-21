import * as React from 'react';
import Selectable from '../Selectable/Selectable';

export interface IDropdownWrapperProps {
  selectItem ? : any;
  type ? : string;
  filterText ? : string;
  selectedItem ? : any;
  children ? : any;
  dataSource ? : any;
  listTemplate ? : any;
  dropdownWrapperClass ? : string;
  dropdownContentClass ? : string;
  checked ? : boolean;
}

export default class DropdownWrapper extends React.Component<IDropdownWrapperProps, {}> {
  selectItem(item){
    this.props.selectItem(item);
  }
  render() {

    const self = this;
    const props = self.props;

    let updatedList = [];

    let selectionList = (item, index) => {

      if ((props.type === 'search') && (item.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1) && (props.filterText !== '')) {
        updatedList.push(
          <div key={index} className="r-DropdownContent__item" onClick={self.selectItem.bind(self, item)}>
            <p>{item}</p>
            <Selectable checked={(props.selectedItem === item ? true : false)}/>
          </div>
        );
      } else if ((props.type === 'search') && props.filterText === '') {
        return null;
      } else if (props.type != 'search'){
          if (!props.dataSource[0].length) {
            updatedList.push(
              props.listTemplate(index,props.dataSource[index])
            )
          } else {
            updatedList.push(
              <div key={index} className="r-DropdownContent__item" onClick={self.selectItem.bind(self, item)}>
                <p>{item}</p>
                <Selectable checked={(props.selectedItem === item ? true : false)}/>
              </div>
            );
          }
      }
    };

    return(
      <div className={props.dropdownWrapperClass}>
        <div className={props.dropdownContentClass}>
            {(() => {
              if (props.children) {
                return (
                  <div>
                    {props.children}
                  </div>
                );
              } else if (props.dataSource) {
                return (
                  <div>
                    {props.dataSource.map(selectionList)}
                    {updatedList}
                  </div>
                );
              } else {
                return null;
              }
            })()}
        </div>
      </div>
    );
  }
}
