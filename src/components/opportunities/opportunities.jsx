import React from 'react'
import "./opportunities.css"
import { List } from '../List'

const OpportunitiesTable = () => {
  return (
    <table className="opptable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Deadline</th>
          <th>Tag</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <a href="https://example.com/opportunity1">Opportunity 1</a> </td>
          <td>June 30, 2023</td>
          <td>Type 1</td>
        </tr>
        <tr>
          <td><a href="https://example.com/opportunity1">Opportunity 2</a></td>
          <td>July 15, 2023</td>
          <td>Type 2</td>
        </tr>
        <tr>
          <td><a href="https://example.com/opportunity1">Opportunity 3</a></td>
          <td>August 1, 2023</td>
          <td>Type 3</td>
        </tr>
      </tbody>
    </table>
  );
}

export default OpportunitiesTable;