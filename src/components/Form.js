import React from 'react'
import { useState } from 'react'
import { states } from '../utils/states';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Address, Label, FormElement } from '../styles/styledElements';

//styles



export default function Form() {
  const [formData, setFormData] = useState(
    {
        firstName: "", 
        lastName: "", 
        birthDate: new Date(), 
        startDate: "", 
        street: "",
        city: "",
        state:"",
        zipCode:0,
        department:""
    }
  )

  console.log(formData)

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

  return (
    <FormElement>
      <Label htmlFor="first-name">First Name</Label>
      <input type="text"
      id="first-name" 
      onChange={handleChange}
      name="firstName" 
      value={formData.firstName} />

      <Label htmlFor="last-name">Last Name</Label>
      <input 
       type="text"
       id="last-name"
       onChange={handleChange}
       name="lastName" 
       value={formData.lastName}
      />

      <Label htmlFor="date-of-birth">Date of Birth</Label>
        <DatePicker 
        id="date-of-birth" 
        dateFormat="dd/MM/yy" 
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        selected={formData.birthDate} 
        onChange={ date => setFormData(prevFormData => {
        return {
            ...prevFormData,
            birthDate: date
        }
        })} />

      <Label htmlFor="start-date">Start Date</Label>
      <DatePicker 
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
      })} />

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
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
    </FormElement>
  )
}
