import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { FormContext } from './utils/FormContext';
import { useState, useMemo } from 'react';
import './App.css';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import Header from './components/Header';

function App() {

  const [allValues, setAllValues] = useState([]);

  const providerValue = useMemo(() => ({ allValues, setAllValues }), [allValues]);

  return ( 
    <div className="App">
      <FormContext.Provider value={providerValue}>
      <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/employeelist" element={<EmployeeList />}></Route>
        </Routes>
      </Router>
      </FormContext.Provider>
    </div>
  );
}

export default App;
