import * as React from 'react';
import * as classNames from 'classnames';

import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

interface ITableDataProps {
    value ?: Array<any>;
    renderChild? : any;
    column? : any;
}

interface ITableDataState {
    type ?: string;
}

export default class TableData extends React.Component<ITableDataProps,ITableDataState>{

    constructor(){
        super();
        this.state = {
            type : ''
        }
    }

    componentDidMount() {
        this.renderType();
    }

    renderType() {
        const self = this;
        const props = self.props;
        let {value} = props;
        
        if (Array.isArray(value)) {
            this.setState({
                type : 'Array'
            })
        } else if (typeof value === 'object') {
            this.setState({
                type: 'Object'
            })
        } else {
            this.setState({
                type: 'Value'
            })
        }
    }

    render() {
        const self = this;
        let state = self.state;
        let {type} = state;
        let {value, column} = self.props;

        return (
            <td width={column.width}>
                {column.template ? column.template(value) : type === 'Value' ? value : <Dropdown material dataSource={value} title={type} />}
            </td>
        )
    }
}