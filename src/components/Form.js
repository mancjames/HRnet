import React from 'react'
import { useContext, useState } from 'react'
import { states } from '../utils/states';
import "react-datepicker/dist/react-datepicker.css";
import { Address, Label, FormElement, FormButton } from '../styles/styledElements';
import { FormContext } from '../utils/FormContext';

export default function Form() {
  const initialForm =  {
    firstName: "", 
    lastName: "", 
    birthDate: "", 
    startDate: "", 
    street: "",
    city: "",
    state:"",
    zipCode:0,
    department:""
}

  const [formData, setFormData] = useState(initialForm);
  const { allValues, setAllValues } = useContext(FormContext)

  function handleChange(event) {
    const {name, value} = event.target
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
      {/* <DatePicker 
        type="date"
        id="start-date" 
        dateFormat="dd/MM/yy" 
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        todayButton="Today"
        selected={formData.startDate} 
        onChange={ date => setFormData(prevFormData => {
        return {
            ...prevFormData,
            startDate: date
        }
      })} /> */}
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
        <select id="state" 
        name="state"
        onChange={handleChange}
        value={formData.state}>
        {states.map((state, index) => {
          return (
            <option value={state.abbreviation} key={state.abbreviation + index}>
              {state.name}
            </option>
          );
        })}
        </select>

        <Label htmlFor="zip-code">Zip Code</Label>
        <input id="zip-code" 
        type="number"
        name="zipCode"
        onChange={handleChange}
        value={formData.zipCode}
         />
      </Address>
        <Label htmlFor="department">Department</Label>
        <select name="department" 
        id="department"
        onChange={handleChange}
        value={formData.department}
        >
            <option> </option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
    </FormElement>
    <FormButton type="submit" onClick={addEmployee}>Save</FormButton>
    </>
  )
}
