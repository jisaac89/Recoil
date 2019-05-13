import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Toolbar } from '../Toolbar/Toolbar';

export class TableSearch extends React.Component<{
  filterItems: (searchTerm, searchableKeys) => void;
  searchableKeys: string[];
  focusOnMount: boolean;
  searchTitle: string;
  value: string;
  onSearchChange: (searchTerm) => void;
  throttle: number;
}> {
  public static defaultProps = {
    active: true,
    className: '',
    disabled: false,
    block: false,
    simple: true,
    throttle: 200,
    iconLocation: 'left',
    onChange() {}
  };
  _throttleTimeout: any;

  componentDidMount() {
    if (this.props.value) {
      this.updateSearch(this.props.value);
    }
  }

  updateSearch = (term: string) => evt => {
    let searchTerm: string;

    if (/\s+$/.test(term)) {
      searchTerm = term.substring(0, term.length - 1);
    } else {
      searchTerm = term;
    }

    if (this._throttleTimeout) {
      clearTimeout(this._throttleTimeout);
    }
    this._throttleTimeout = setTimeout(() => {
      this.props.filterItems(searchTerm, this.props.searchableKeys);
      this.props.onSearchChange ? this.props.onSearchChange(searchTerm) : null;
    }, this.props.throttle);
  };

  render() {
    const self = this;
    const props = self.props;

    const { focusOnMount } = this.props;

    const searchPartial = () => {
      return (
        <Toolbar tabIndex={-1} theme={'light'} flex flush block noRadius className={'p5 table-search'}>
          <Input
            placeholder={props.searchTitle}
            onChange={this.updateSearch}
            block
            type={'text'}
            size={'small'}
            flex
            value={this.props.value}
            focusOnMount={focusOnMount}
            tabIndex={-1}
          />
          <Button tabIndex={-1} size={'small'} icon={'times'} onClick={this.updateSearch('')} />
        </Toolbar>
      );
    };

    return props.searchableKeys ? searchPartial() : null;
  }
}
