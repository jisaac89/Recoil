import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import Shrink from '../Shrink/Shrink';
import Toolbar from '../Toolbar/Toolbar';
import Input from '../Input/Input';
import Emerge from '../Emerge/Emerge';
import Grid from '../Grid/Grid';
import SlideIn from '../SlideIn/SlideIn';

export default class Shortcut extends React.Component<any,any>{

  constructor() {
    super();
    this.state = {
      showShortcut : false,
      clickCounter: 0,
      value: ''
    }
  }

  public componentDidMount() {
    const self = this;
    const props = self.props;
    window.addEventListener("keydown", this.startShortcutListener.bind(this), false);
  }

  public componentWillUnmount() {
    window.removeEventListener("keydown", null, false);
    window.removeEventListener("keyup", null, false);

  }

  public startShortcutListener(e) {
    const context = this;
    const props = context.props;
    let state = context.state;

    const refInput = ReactDOM.findDOMNode<HTMLElement>(context.refs["input"]);

    if (e.keyCode === 16 ) {
      context.setState({
        showShortcut : this.state.showShortcut ? false : true
      })
    }

  }

  public onChange(value){
    this.setState({
      value: value
    })

    this.props.onChange(value);
  }

  render(){

    const self = this;
    let itemArray = [];

    let columns = [
      {name: 'name', tabbable: true, width: 200},
      {name: 'description'}
    ]

    for (let i in this.props.dataSource) {
      let item = this.props.dataSource[i];
      if (item.name.toLowerCase().indexOf(self.state.value.toLowerCase()) > -1) {
        itemArray.push(item)
      }
    }

    return (
      <Layer fill overflow>
        <Shrink className={'posrel'} if={this.state.showShortcut}>
          {this.props.children}
        </Shrink>
        <SlideIn from="top" if={this.state.showShortcut}>
          <Layer className="light h100 w600px p10 posrel center-width mt100">
            {(()=>{
              if (this.state.showShortcut) {
                return (
                  <Toolbar block>
                    <Input ghost focusOnMount={this.state.showShortcut} value={this.state.value} onChange={this.onChange.bind(this)} block ref='input' type="text" icon="search" title={this.props.title ? this.props.title : 'Search website'} />
                  </Toolbar>
                )
              }
            })()}
            <Grid dataSource={itemArray} open={this.state.showShortcut} columns={columns} onSelect={this.props.onChange} />
          </Layer>
        </SlideIn>
      </Layer>
    )
  }
}
