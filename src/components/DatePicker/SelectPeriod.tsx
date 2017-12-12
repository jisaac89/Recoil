import * as React from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default class SelectPeriod extends React.Component<any, any> {
    render() : JSX.Element {

        let {period, periods, selectPeriod} = this.props;

        return (
            <Dropdown 
                className="w100"
                material 
                block 
                title={periods[period]} 
                selectedElements={[periods[period]]}
                rowIsSelectable="single"
                onChange={selectPeriod} 
                dataSource={periods}
                pageSize={periods.length}
                hideHeader
                hideDropdownHeader
                scrollToId={periods[period]}
            />
        );
    }
}