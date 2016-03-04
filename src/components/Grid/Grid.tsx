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
      numberOfPages: 0
    }
  }

  public componentDidMount() {
    this.loadCollection();
  }

  public loadCollection() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let collection = props.dataSource;
    let numberOfPages;

    self.setState({
      collection: props.dataSource,
      numberOfPages : Math.ceil(props.dataSource.length / (this.props.numberPerPage ? this.props.numberPerPage : this.state.numberPerPage))
    });

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

  }

  public columns(id) {
    this.props.columns(id);
  }

  public firstPage() {
    this.setState({
      currentPage : 1
    })
  }

  public previousPage() {
    this.setState({
      currentPage :  this.state.currentPage -= 1
    })
  }

  public nextPage() {
    this.setState({
      currentPage : this.state.currentPage += 1
    })
  }

  public lastPage() {
    this.setState({
      currentPage : this.state.numberOfPages
    })
  }

  public gotoPage(i) {
    this.setState({
      currentPage : i + 1
    })
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    let {columns, dataSource} = props;

    let numberPerPage;

    if (props.numberPerPage) {
      numberPerPage = props.numberPerPage;
    } else {
      numberPerPage = state.numberPerPage;
    }

    let begin = ((state.currentPage - 1) * numberPerPage);
    let end = begin + numberPerPage;

    let pageList = this.state.collection.slice(begin, end);
    console.log(pageList);

    let renderedPage = [];

    for (let i = 0; i < pageList.length; i++) {
        renderedPage.push(pageList[i]);
    }

    console.log(this.state);
    console.log(renderedPage);

    return (
      <Layer overflow className='r-Grid w100'>
        <GridHeader
          hideHeader={props.hideHeader}
          columns={props.columns}
          dataSource={renderedPage}
          sortable={props.sortable}
          toggleSorting={this.toggleSorting.bind(this)}
          sortType={state.sortType}
        />
        <GridBody
          open={props.open}
          onSelect={props.onSelect}
          selected={props.selected}
          columns={props.columns}
          dataSource={renderedPage}
          dataType={state.dataType}
        />
        {(()=>{
          if (state.numberOfPages !== 1) {
            return (
              <GridFooter
                gotoPage={this.gotoPage.bind(this)}
                previousPage={this.previousPage.bind(this)}
                nextPage={this.nextPage.bind(this)}
                lastPage={this.lastPage.bind(this)}
                firstPage={this.firstPage.bind(this)}
                numberOfPages={state.numberOfPages}
                currentPage={state.currentPage}
                />
            )
          }
        })()}
      </Layer>
    )
  }
}
