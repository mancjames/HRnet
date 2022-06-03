import React, {useContext} from 'react'
import { FormContext } from '../utils/FormContext'

export default function EmployeeList() {
  const { allValues } = useContext(FormContext)

  console.log(allValues)
  
  return (
       <div>employeeList</div>
  )
}
