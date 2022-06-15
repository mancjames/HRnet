import React from 'react'
import { useContext, useState } from 'react'
import { states , department } from '../utils/states';
import "react-datepicker/dist/react-datepicker.css";
import { Address, Label, FormElement, FormButton } from '../styles/styledElements';
import { FormContext } from '../utils/FormContext';
import Select from 'react-select'

export default function Form() {
  const initialForm =  {
    firstName: "", 
    lastName: "", 
    birthDate: "", 
    startDate: "", 
    street: "",
    city: "",
    state: null,
    zipCode:0,
    department:""
}
  const [formData, setFormData] = useState(initialForm);
  const { allValues, setAllValues } = useContext(FormContext)
  console.log(formData)

  function handleChange(event) {
    const {name, value} = event.target || event
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

  function addEmployee(event){
    event.preventDefault();
    setAllValues([...allValues, formData])
    setFormData(initialForm)
  };

  const stateOptions = states.map((state, index)=>{
    return {
      label: state.name,
      value: state.abbreviation,
      name: 'state',
      key: index
    }
  })

  const departmentOptions = department.map((dept, index)=>{
    return {
      label: dept.department,
      value: dept.department,
      name: 'department',
      key: index
    }
  })

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: 'rgb(118, 118, 118)',
      minHeight: '25px',
      height: '25px',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: '25px',
      margin: '0',
      padding: '0 6px',
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0',
      height: '25px',
      fontSize: '.75rem'
    }),
  }

  return (
    <>
    <FormElement>
      <Label htmlFor="first-name">First Name</Label>
      <input type="text"
      id="first-name" 
      onChange={handleChange}
      name="firstName" 
      value={formData.firstName}/>

      <Label htmlFor="last-name">Last Name</Label>
      <input 
       type="text"
       id="last-name"
       onChange={handleChange}
       name="lastName" 
       value={formData.lastName}
      />

      <Label htmlFor="date-of-birth">Date of Birth</Label>
        <input 
       type="date"
       id="date-of-birth"
       onChange={handleChange}
       name="birthDate" 
       value={formData.birthDate}
       placeholder="dd-mm-yyyy"
      />

      <Label htmlFor="start-date">Start Date</Label>
       <input 
       type="date"
       id="start-date"
       onChange={handleChange}
       name="startDate" 
       value={formData.startDate}
       placeholder="dd-mm-yyyy"
      />

      <Address>
        <legend>Address</legend>

        <Label htmlFor="street">Street</Label>
        <input type="text" 
        id="street"
         onChange={handleChange}
         name="street" 
         value={formData.street}
        />

        <Label htmlFor="city">City</Label>
        <input type="text"
        id="city"
         onChange={handleChange}
         name="city" 
         value={formData.city}
        />

        <Label htmlFor="state">State</Label>
        <Select id="state" 
        name="state"
        onChange={handleChange}
        value={stateOptions.filter(function(option) {
          return option.value === formData.state;
        })}
        options={stateOptions}
        styles={customStyles}
        />

        <Label htmlFor="zip-code">Zip Code</Label>
        <input id="zip-code" 
        type="number"
        name="zipCode"
        onChange={handleChange}
        value={formData.zipCode}
         />
      </Address>
        <Label htmlFor="department">Department</Label>
        <Select id="department" 
        name="department"
        onChange={handleChange}
        value={departmentOptions.filter(function(option) {
          return option.value === formData.department;
        })}
        options={departmentOptions}
        styles={customStyles}
        />
    </FormElement>
    <FormButton type="submit" onClick={addEmployee}>Save</FormButton>
    </>
  )
}
