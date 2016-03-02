import * as React from 'react';
import './Grid.less';

import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

import GridHeader from './GridHeader';
import GridBody from './GridBody';
import GridFooter from './GridFooter';

export default class Grid extends React.Component<any, any>{

  constructor() {
    super();
    this.state = {
      collection: [],
      pageList: [],
      currentPage : 1,
      numberPerPage: 10,
      numberOfPages: 0,
      dataType: null
    }
  }

  public componentDidMount() {
    this.loadCollection();
  }

  public componentWillReceiveProps(nextProps) {
    const self = this;
    if (nextProps.dataSource !== self.props.dataSource) {
      self.setState({
        collection: nextProps.dataSource
      });
    }

    this.loadList(this.state.collection, 1);
  }

  public loadCollection() {

    let isArray = function(a) {
      return (!!a) && (a.constructor === Array);
    };

    let isObject = function(a) {
        return (!!a) && (a.constructor === Object);
    };

    const self = this;
    const props = self.props;
    let state = self.state;

    let collection = [];

    if (isArray(props.dataSource)) {
        for (let i = 0; i < props.dataSource.length; i++) {
          collection.push(props.dataSource[i]);
        }
        self.setState({
          dataType: 'Array'
        })
    } else if (isObject(props.dataSource)) {
        for (let key in props.dataSource) {
          collection.push(props.dataSource[key])
        }
        self.setState({
          dataType: 'Object'
        })
    }

    if (props.numberPerPage > 0) {
      self.setState({
        numberPerPage: props.numberPerPage
      })
    } else {
      self.setState({
        numberPerPage: 10
      })
    }

    self.setState({
      collection: collection,
      numberOfPages : Math.ceil(collection.length / this.state.numberPerPage)
    });

    this.loadList(collection, 1);
  }

  public loadList(collection, currentPage) {
    const state = this.state;
    let begin = ((currentPage - 1) * state.numberPerPage);
    let end = begin + state.numberPerPage;

    let pageList = collection.slice(begin, end);

    if (pageList.length > 0) {
      this.setState({
        pageList: pageList
      })
    }
  }

  public toggleSorting(key, sortType) {
    let updatedCollection = [];

    for (let key in this.props.dataSource) {
      updatedCollection.push(this.props.dataSource[key])
    }

    let sortCollection = () => {
      updatedCollection.sort(function(a, b){
        switch (typeof a[key]) {
          case ('string'):
            let itemPrev = a[key].toLowerCase();
            let itemNext = b[key].toLowerCase();
             if (itemPrev < itemNext) //string asc
              return -1
             if (itemPrev > itemNext)
              return 1
            break;
          case ('number'):
            return a[key]-b[key];
          default:
        }
      })
      return updatedCollection;
    }

    if (sortType === 'none') {
      sortCollection();
    } else if (sortType === 'desc') {
      sortCollection().reverse();
    }

    this.setState({
      collection: updatedCollection,
      currentPage : 1
    })

    this.loadList(this.state.collection, 1);

  }

  public columns(id) {
    this.props.columns(id);
  }

  public firstPage() {
    this.setState({
      currentPage : 1
    })
    this.loadList(this.state.collection, this.state.currentPage -= 1);
  }

  public previousPage() {
    this.setState({
      currentPage :  this.state.currentPage -= 1
    })
    this.loadList(this.state.collection, this.state.currentPage -= 1);
  }

  public nextPage() {
    this.setState({
      currentPage : this.state.currentPage += 1
    })
    this.loadList(this.state.collection, this.state.currentPage += 1);
  }

  public lastPage() {
    this.setState({
      currentPage : this.state.numberOfPages
    })
    this.loadList(this.state.collection, this.state.numberOfPages);
  }

  public gotoPage(i) {
    this.setState({
      currentPage : i + 1
    })
    this.loadList(this.state.collection, i + 1);
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    let {columns, dataSource} = props;

    console.log(state);

    return (
      <Layer overflow className='r-Grid w100'>
        <GridHeader
          hideHeader={props.hideHeader}
          columns={props.columns}
          dataSource={state.pageList}
          sortable={props.sortable}
          toggleSorting={this.toggleSorting.bind(this)}
          sortType={state.sortType}
        />
        <GridBody
          onSelect={props.onSelect}
          selected={props.selected}
          columns={props.columns}
          dataSource={state.pageList}
          dataType={state.dataType}
        />
        <GridFooter
          gotoPage={this.gotoPage.bind(this)}
          previousPage={this.previousPage.bind(this)}
          nextPage={this.nextPage.bind(this)}
          lastPage={this.lastPage.bind(this)}
          firstPage={this.firstPage.bind(this)}
          {...state}
          {...props} />
      </Layer>
    )
  }
}
