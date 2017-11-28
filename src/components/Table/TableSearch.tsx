import * as React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

export default class TableSearch extends React.Component<any, any>{
    _throttleTimeout: any;

  public static defaultProps = {
      active: true,
      className: '',
      disabled: false,
      block: false,
      simple: true,
      throttle: 200,
      iconLocation : 'left',
      onChange () {}
  };

  constructor (props : any) {
    super(props);
    this.state = {
      searchTerm: props.value || ''
    }
  }

  componentDidMount() {
      if (this.props.value) {
          this.updateSearch(this.props.value);
      }
  }
  
  componentWillReceiveProps (nextProps : any) {
    if (nextProps.value && nextProps.value !== this.props.value) {
      this.updateSearch(nextProps.value)
    }
  }

  updateSearch(term : string) {
      let searchTerm : string;
      
      if (/\s+$/.test(term)) {
          searchTerm = term.substring(0, term.length - 1);
      } else {
          searchTerm = term;
      }

    this.setState({
      searchTerm: searchTerm
    }, () => {
      if (this._throttleTimeout) {
        clearTimeout(this._throttleTimeout)
      }
      this._throttleTimeout = setTimeout(() => {
        this.props.filterItems(searchTerm, this.props.searchableKeys);
        this.props.onSearchChange ? this.props.onSearchChange(searchTerm) : null;
      }, this.props.throttle)

    })
  }

  render() {

    const self = this;
    const props = self.props;

    const {focusOnMount} = this.props

    let searchPartial = () => {
      return (
        <Toolbar tabIndex={-1} theme="light" flex flush block noRadius className="p5 table-search">
          <Input 
            placeholder={props.searchTitle} 
            onChange={this.updateSearch.bind(this)} 
            block
            type="text"
            size="small"
            flex
            value={this.state.searchTerm}
            focusOnMount={focusOnMount}
            tabIndex={-1}
          />
          <Button tabIndex={-1} size="small" icon="times" onClick={this.updateSearch.bind(this, "")} />
        </Toolbar>
      )
    }
    
    return props.searchableKeys ? searchPartial() : null;

  }
}