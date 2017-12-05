let something, somethingElse, itemFeatured;

let columnsPropsExample = [
    { template: something, columns: [1, 1, 1] },
    { template: somethingElse, columns: [1] },
    [itemFeatured ? { template: somethingElse, columns: [1] } : null]
]

let gridRows = [
    {
        data: [
            {},
            {},
            {}
        ]
    }
]

{/*<Grid dataSource={[1,2,3,4,5]} rows={columnsPropsExample} />*/ }

// { rows={[{columns=[1,1,1,1,1]}]} }

import * as React from 'react';
import * as classNames from 'classnames';

import Layer from '../Layer/Layer';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Loading from '../Loading/Loading';

import { IDataSourceProps } from '../DataSource/DataSource';
import DataSource from '../DataSource/DataSource';

import Align from '../Align/Align';

import { branchIn } from '../Utils';

export interface IGridProps {
    dataSource?: any;
    selectedKey?: string;
    activeRows?: any;
    rows?: any;
}

interface IGridState {
    gridRows: any;
}

class Grid extends React.Component<IGridProps, IGridState>{

    constructor(props) {
        super(props);
        this.state = {
            gridRows: []
        }
    }

    componentDidMount() {
        this.convertDataSourceToGridRows()
    }

    convertDataSourceToGridRows(index?: number, indexRow?: number, indexColumn?: number, currentArray?: Array<any>, arrayIndex?: any) {

        let { activeRows, rows } = this.props;

        let array = currentArray || [];
        let arrayRowIndex = arrayIndex || 0;

        let currentElementIndex = index || 0;
        let currentRowIndex = indexRow || 0;
        let currentColumnIndex = indexColumn || 0;

        let elements = activeRows
        let totalElementCount = elements.length;
        let currentElement = elements[currentElementIndex];

        let totalRowsCount = rows.length;
        let currentRow = rows[currentRowIndex];

        let columns = currentRow.columns;
        let totalColumnsCount = currentRow.columns.length;

        let currentColumn = columns[currentColumnIndex];

        if (currentElementIndex < totalElementCount){

            if (currentColumnIndex === 0 && currentColumnIndex < totalColumnsCount) {
                
                array.push({
                    data: [], 
                    height: currentRow.height, 
                    columns: columns,
                    template: currentRow.template(currentElement)
                })
                
                array[arrayRowIndex].data.push(currentElement);
                this.convertDataSourceToGridRows(currentElementIndex+1, currentRowIndex, currentColumnIndex+1, array, arrayRowIndex);
            } else if (currentColumnIndex < totalColumnsCount){
                array[arrayRowIndex].data.push(currentElement);
                this.convertDataSourceToGridRows(currentElementIndex+1, currentRowIndex, currentColumnIndex+1, array, arrayRowIndex);
            } else {
                if (currentRowIndex < totalRowsCount - 1){
                    this.convertDataSourceToGridRows(currentElementIndex, currentRowIndex+1, 0, array, arrayRowIndex+1);
                } else{
                    this.convertDataSourceToGridRows(currentElementIndex, 0, 0, array, arrayRowIndex+1);
                }
            }

        }

        this.setState({
            gridRows : array
        }, ()=>{
            console.log(this.state.gridRows);
        })

    }

    render() {

        return (
            <div>
                {this.state.gridRows.map((element, index) =>{
                    return(
                        <Align style={{height : element.height}} columns={element.columns} key={index}>
                            {element.data.map((item,i)=>{
                                return (
                                    <Layer fill key={i}>
                                        {element.template}
                                    </Layer>
                                )
                            })}
                        </Align>
                    )
                })}
            </div>
        )
    }
}

export default DataSource(<Grid />);