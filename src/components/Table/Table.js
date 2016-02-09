import React, {Component} from 'react';

export default class Table extends Component{
  render() {
    return (
      <div>
        <table className="w100">
          <thead className="text-left">
            <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Telephone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jack</td>
              <td>Sales</td>
              <td>555-5555</td>
            </tr>
            <tr>
              <td>John</td>
              <td>Admin</td>
              <td>555-5555</td>
            </tr>
            <tr>
              <td>James</td>
              <td>Sales</td>
              <td>555-5555</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
