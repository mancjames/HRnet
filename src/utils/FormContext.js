import { createContext } from "react";

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

export const FormContext = createContext(initialForm);