import React from 'react'
import { FormContext } from '../utils/FormContext'
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Birth date',
      selector: row => row.birthDate,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: row => row.zipCode,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
    },
];

export default function EmployeeList() {

  return (
    <FormContext.Consumer>
    {
      value => 
      <DataTableExtensions
      columns={columns}
      data={value.allValues}
      export={false}
      print={false}
    >
      <DataTable
      columns={columns}
      data={value.allValues}
      pagination
      highlightOnHover
  />
  </DataTableExtensions>
    }
</FormContext.Consumer>
  )
}
