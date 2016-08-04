import * as React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import Toolbar from '../Toolbar/Toolbar';

export default class GridSearch extends React.Component<any, {}>{
    filterItems(value) {
        this.props.filterItems(value, this.props.searchableKeys);
    }
  render() {

    const self = this;

    if(this.props.searchableKeys) {
      return <Toolbar block noRadius><Input focusOnMount block type="text" title="Find" onChange={this.filterItems.bind(this)} /></Toolbar>
    } else {
        return null
    }

  }
}

// <Dropdown from="top left" onSelected={this.onSelected.bind(this)} title="Page Size" type="selection" data={['5', '10', '15']} />