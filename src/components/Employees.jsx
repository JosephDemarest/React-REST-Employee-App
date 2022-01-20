import axios from "axios";
import React, { useEffect, useState } from "react";
import Employee from "./Employee";

export default function Employees() {
  const [Employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function getAllEmployees() {
    axios
      .get("http://statenweb.mockable.io/employees")
      .then(function (response) {
        setEmployees(response.data);
      });
  }

  useEffect(function(){
      getAllEmployees();
  }, []);


  if(Employees.length === 0){
    return <div class="spinner-border" role="status">
    
  </div>
}

  if (selectedEmployee) {
    return <div class="container">
        <Employee selectedEmployee={selectedEmployee}/>
        
    <button type="button" class=" d-flex flex-column align-items-center btn btn-secondary" onClick={() => {
                setSelectedEmployee(null);
              }}
            >Back</button></div>;
  }

  return (
    <div>
      {Employees.map(function (Employee) {
        return (
          <p key={Employee.id}>
            <button type="button" class="d-flex flex-column align-items-centerbtn btn-primary"
              onClick={() => {
                setSelectedEmployee(Employee.id);
              }}
            >
              {Employee.name} - {Employee.department}
            </button>
          </p>
        );
      })}
    </div>
  );
}
