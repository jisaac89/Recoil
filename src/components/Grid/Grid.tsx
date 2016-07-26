import * as React from 'react';
import * as classNames from 'classnames';
import './Grid.less';

import GridHeader from './GridHeader';
import GridBody from './GridBody';
import GridFooter from './GridFooter';

export interface IGridProps {
  dataSource ? : any[];
  numberPerPage ? : number;
  columns ? : any;
  open ? : boolean;
  hideHeader ? : boolean;
  sortable ? : boolean;
  detailTemplate? : any;
  height ? : string;
  onRowSelect ? : any;
  selected ? : any;
  hideColumns ? : any;
  columnTemplate ?: any;
  detailTemplateOpenOnHover? : boolean;
  detailTemplateOpenOnSelect? : boolean;
  isSelected ?: any;
  dataKey ? : any;
  rowIsSelectable ? : boolean;
  selectedKey ? : string;
  rowIsSelectableType? : string;
  onSelect? : any;
  detailTemplateOpenOnRowSelect? : boolean;
  filterSelected? : boolean;
  initialSortKey? : string;
}

export interface IGridState {
  columns ?: any;
  dataSource ?: any;
  pageList ?: any;
  currentPage  ?: number;
  numberPerPage ?: number;
  numberOfPages ?: number;
  dataType ? : any;
  sortType ? : any;
  selected ? : any;
}

export default class Grid extends React.Component<IGridProps, IGridState>{

  constructor(props) {
    super(props);
    this.state = {

      // the defined columns to show
      columns: [],

      // datasource, an array of objects
      dataSource: [],

      // seperate dataSource into seperate pages
      pageList: [],

      // set the current page
      currentPage : 1,

      // number of items to show per page
      numberPerPage: 10,

      // default amount of pages
      numberOfPages: 0,

      // an array of selected items
      selected : props.selected || []
    }
  }

  // 1) When the component mounts, check to see if a user has already defined a columns array,
  //    if not automatically create the columns

  componentDidMount() {
    let columnsDefinedByUser = this.props.columns;
    let dataSource = this.props.dataSource;

    if (columnsDefinedByUser) {
      this.loadCollection(dataSource);
    } else {
      this.automaticallyCreateColumns();
      this.loadCollection(dataSource);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource !== this.props.dataSource) {
      this.setState({
        currentPage: 1
      });
      this.loadCollection(nextProps.dataSource);
    }
  }

  automaticallyCreateColumns() {
    const self = this;
    const props = self.props;
    let {dataSource} = props;

    let columnsArray = [];
    let columnsArrayLength = columnsArray.length;
    let columns = [];

    let firstItemOfDataSource = dataSource[0] || [dataSource];
    let columnHeadersForFirstItem = Object.keys(firstItemOfDataSource);

    // check to see if the dataSource is an array. 
    // checking "dataSource.constructor === Array" would be faster, but with some datSources like mobx it overides the contructor
    if (dataSource instanceof Array) {
      // Grab the first item of the dataSource and push the header names to columns array.
      columnHeadersForFirstItem.map((columnHeaderName)=>{
        columnsArray.push(columnHeaderName);
      })
    } else {
      Object.keys(dataSource).map((columnHeaderName) => {
        columnsArray.push(Object.keys(dataSource)[columnHeaderName]);
      })
    }

    columnsArray.map((columnHeaderName) => {
      columns.push({
          name: columnHeaderName
      });
    })

    self.setState({
      columns: columns.reverse()
    })
  }

  loadCollection(dataSource) {
    const self = this;
    const props = self.props;

    if (props.initialSortKey) {
       self.sortCollection(dataSource, props.initialSortKey, "asc");
    } else {
      self.setState({
        dataSource: dataSource[0] === undefined ? [dataSource] : dataSource
      });
    }
  }

  sortCollection(dataSource, key, sortType) {
      const self = this;
      
      let sortOrder;

      let sortedDataSource = dataSource.sort(function(a, b){
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

      if (sortType === 'asc') {
        sortOrder = sortedDataSource;
      } else {
        sortOrder = sortedDataSource.reverse();
      }

      self.setState({
        dataSource : sortOrder,
        currentPage : 1
      })
  }

  toggleSorting(key, sortType) {
    const self = this;
    self.sortCollection(self.state.dataSource, key, sortType);
  }


  firstPage() {
    this.setState({
      currentPage : 1
    })
  }

  previousPage() {
    this.setState({
      currentPage :  this.state.currentPage -= 1
    })
  }

  nextPage() {
    this.setState({
      currentPage : this.state.currentPage += 1
    })
  }

  lastPage(numberOfPages) {
    this.setState({
      currentPage : numberOfPages
    })
  }

  gotoPage(i) {
    this.setState({
      currentPage : i + 1
    })
  }

  changePageSize(pageSize) {
    this.setState({
      numberPerPage : pageSize
    })
  }

  onRowSelect(item) {
    if (this.props.onRowSelect) {
      this.props.onRowSelect(item);
    }
  }


  render() {
    const self = this;
    const props = self.props;
    let state = self.state;
    let renderedPage = [];
    let renderedColumns;

    let {dataSource} = state;

    let numberPerPage, numberOfPages;

    if (props.numberPerPage) {
      numberPerPage = props.numberPerPage;
      numberOfPages = Math.ceil(dataSource.length / (props.numberPerPage));
    } else {
      numberPerPage = state.numberPerPage;
      numberOfPages = Math.ceil(dataSource.length / (state.numberPerPage));
    }

    let begin = ((state.currentPage - 1) * numberPerPage);
    let end = begin + numberPerPage;
    let pageList = dataSource.slice(begin, end);

    pageList.map((item, index)=> {
      renderedPage.push(item);
    })

    if (this.props.columns) {
      renderedColumns = this.props.columns;
    } else {
      renderedColumns = this.state.columns;
    }

    return (
      <div className="r-Grid">
        <table className='r-Grid__Table w100'>
          <GridHeader
            hideHeader={props.hideHeader}
            columns={renderedColumns}
            dataSource={renderedPage}
            sortable={props.sortable}
            toggleSorting={this.toggleSorting.bind(this)}
            sortType={state.sortType}
            detailTemplate={this.props.detailTemplate}
            hideColumns={props.hideColumns}
          />
          <GridBody
            columns={renderedColumns}
            dataSource={renderedPage}
            dataType={state.dataType}
            numberOfPages={numberOfPages}
            currentPage={state.currentPage}
            height={props.height}
            open={props.open}
            detailTemplate={props.detailTemplate}
            hideColumns={props.hideColumns}
            columnTemplate={props.columnTemplate}
            detailTemplateOpenOnHover={props.detailTemplateOpenOnHover}
            detailTemplateOpenOnSelect={props.detailTemplateOpenOnSelect}
            rowIsSelectable={props.rowIsSelectable}
            onRowSelect={this.onRowSelect.bind(this)}
            selected={this.state.selected}
            selectedKey={props.selectedKey}
            rowIsSelectableType={props.rowIsSelectableType}
            detailTemplateOpenOnRowSelect={props.detailTemplateOpenOnRowSelect}
            filterSelected={this.props.filterSelected}
            />
        </table>
          {(()=>{
            if (numberOfPages <= 1) {
              return null
            } else {
              return (
                <GridFooter
                  gotoPage={this.gotoPage.bind(this)}
                  previousPage={this.previousPage.bind(this)}
                  nextPage={this.nextPage.bind(this)}
                  lastPage={this.lastPage.bind(this)}
                  firstPage={this.firstPage.bind(this)}
                  numberOfPages={numberOfPages}
                  currentPage={state.currentPage}
                  changePageSize={this.changePageSize.bind(this)}
                  />
              )
            }
          })()}
        </div>
    )
  }
}


// if (sortType === 'none' || sortType === 'asc') {
//   collectionType = self.sortCollection(key);
// } else if (sortType === 'desc') {
//   collectionType = self.sortCollection(key).reverse();
// }