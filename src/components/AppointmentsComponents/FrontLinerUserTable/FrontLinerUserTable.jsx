import React, { Fragment, useState, useEffect } from "react";
import { Badge, Breadcrumb, Button, Card, Container, Table } from "react-bootstrap";
import { FaHome, FaFileAlt, FaTrash, FaPen } from "react-icons/fa";

// import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
// import cellEditFactory from 'react-bootstrap-table2-editor';
import ReactTable,{useTable} from 'react-table'
import data from '../../../Data/view-details.json'

import './FrontLinerUserTable.css'

const columns = [{
  accessor: 'id',
  Header: '#',
  sort: true
}, {
  accessor: 'doctor',
  Header: "Doctor's Name",
  sort: true
}, {
  accessor: 'email',
  Header: 'Email'
},
{
  accessor: 'gender',
  Header: 'Alt email'
}
  , {
  accessor: 'date',
  Header: 'Date'
}
  , {
  accessor: 'phone',
  Header: 'Phone'
}
  // , {
  //   accessor: 'doctor',
  //   Header: 'Doctor'
  // },
  // {
  //   accessor: 'vaccine',
  //   Header: 'Vaccine'
  // }

];
// const { SearchBar } = Search;

const defaultSorted = [{
  accessor: 'name',
  order: 'desc'
}];

const FrontLinerUserTable = () => {
  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <div className="front-liner__table table-wrapper">
      {/* <ToolkitProvider
            keyField="id"
            data={ products }
            columns={ columns }
            search
          >
            {
              props => (
                <div className="table-content">
                  <div className="table-content__searchBar float-right mb-3 mt-1">
                    <SearchBar { ...props.searchProps } />
                  </div>
                  <div className="table-content__table">
                    <BootstrapTable bootstrap4 keyField='id' { ...props.baseProps } 
                    pagination={ paginationFactory() } defaultSorted={ defaultSorted }  
                    />
                  </div>
                </div>
              )
            }
          </ToolkitProvider> */}
      <table {...getTableProps()} className='fl-table'>
        <thead>
          {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {// Render the header
                        column.render('Header')}
                    </th>
                  ))}
              </tr>
            ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {// Render the cell contents
                            cell.render('Cell')}
                        </td>
                      )
                    })}
                </tr>
              )
            })}
        </tbody>
      </table>

    </div>
  )
}

export default FrontLinerUserTable
