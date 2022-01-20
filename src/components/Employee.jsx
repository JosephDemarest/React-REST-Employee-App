import axios from "axios";
import React, {useEffect, useState} from "react";

function Employee(props){
    const [EmployeeData, setEmployeeData] = useState(null);
    useEffect(function(){
        axios.get(`http://statenweb.mockable.io/employee/${props.selectedEmployee}`).then(function(response)
        {
            setEmployeeData(response.data);
        });
    }, [props.selectedEmployee]);


    if(!EmployeeData){
        return <div className="spinner-border" role="status">
     </div>
    }

    return <div class="d-flex flex-column align-items-center">
         <div className="card" style={{width: '35rem'}}>
  <img src={EmployeeData.photo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{EmployeeData.name}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Employee ID - {EmployeeData.id}</li>
    <li className="list-group-item">Role - {EmployeeData.role}</li>
    <li className="list-group-item">Department - {EmployeeData.department}</li>
  </ul>
</div>
    
   </div>;
}

export default Employee;
