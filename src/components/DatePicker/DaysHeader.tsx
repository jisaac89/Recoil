import * as React from 'react';

export default class DaysHeader extends React.Component<any, any> {
    render() {
        return (
            <table className="w100">
                <thead>
                    <tr>
                        <th className="p5">Sun</th>
                        <th className="p5">Mon</th>
                        <th className="p5">Tue</th>
                        <th className="p5">Wed</th>
                        <th className="p5">Thu</th>
                        <th className="p5">Fri</th>
                        <th className="p5">Sat</th>
                    </tr>
                </thead>
            </table>
        );
    }
}