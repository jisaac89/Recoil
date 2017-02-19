import * as React from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default class SelectMonth extends React.Component<any, any> {
    render() : JSX.Element {

        let {month, selectMonth, monthNames} = this.props;

        return (
            <Dropdown 
                className="w100"
                material 
                block 
                title={monthNames[month - 1]} 
                selectedElements={[monthNames[month - 1]]}
                rowIsSelectable="single"
                onChange={selectMonth} 
                dataSource={monthNames}
                pageSize={monthNames.length}
                hideHeader
                hideDropdownHeader
            />
        );
    }
}