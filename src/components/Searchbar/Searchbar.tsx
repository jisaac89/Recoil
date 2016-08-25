import * as React from 'react';
import * as classNames from 'classnames';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import Input from '../Input/Input';
import Grid from '../Grid/Grid';
import Open from '../Open/Open';

import './Searchbar.less';

export interface ISearchbarProps {
  open ? : boolean;
  dataSource : Array<any>;
  columns? : any;
  searchableKeys : Array<string>;
}

export interface ISearchbarState {
  open ? : boolean;
  query ? : any;
  filteredData ? : any;
}

export default class Searchbar extends React.Component<ISearchbarProps, ISearchbarState>{
    constructor(props) {
        super(props);
        this.state = {
            query : '',
            filteredData : []
        }
    }
    componentDidMount(){
        console.log(this.props.searchableKeys);

        let filteredSearchString;

        let createList = (element) => {
            if(element[key]){
                element['_searchString'] += ' ' + element[key]
            }
        }

        this.props.searchableKeys.map(createList);

        this.props.searchableKeys.forEach(key => {
            
        });

        console.log(this.props.dataSource);
    }
    onChange(term) {

        this.setState({
            query:term
        })

        let result = term.split(" ");

        if (term.length > 1) {
            var queryResult=[];
            let newDataSource = this.props.dataSource.forEach(function(item){
                item['density'] = 0;
                result.forEach(word => {
                    if(item['_searchString'].toLowerCase().indexOf(word)!=-1) {
                        item['density'] = item['density']++;
                        if (queryResult.indexOf(item) == -1) {
                            queryResult.push(item);
                        }
                    }
                });
            });
            if (queryResult.length) {
                this.setState({
                    filteredData: queryResult,
                    open: true
                })
            }
            
        } else {
             this.setState({
                query:'',
                filteredData: [],
                open: false
            })           
        }

        console.log(this.state.filteredData);
    }
    render() {

    const self = this;
    const props = self.props;

    let data;

    let searchbarClass = classNames(
        'r-Searchbar'
    );

    return (
        <div className={searchbarClass}>
            <Input block onChange={this.onChange.bind(this)} placeholder="Search" />
            <Open if={this.state.open}>
                <Grid hideHeader dataSource={this.state.filteredData} columns={this.props.columns} hideColumns={["_searchString"]} />
            </Open>
        </div>
    );
  }
}
