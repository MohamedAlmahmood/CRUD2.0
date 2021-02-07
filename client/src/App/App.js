import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [position, setposition] = useState("");
  const [salary, setsalary] = useState(0);
  const [employeelist, setemployeelist] = useState([]);
  const [newsalary, setnewsalary] = useState(0);

  const addEmployee = ()=>{
    Axios.post('http://localhost:3001/create', {
      name:name, 
      age:age, 
      position:position, 
      salary:salary,
      }
    ).then( ()=> {
      setemployeelist([...employeelist, { //array destructuring to automatically show the new employee without refreshing
        name:name, 
        age:age, 
        position:position, 
        salary:salary,
      }])
    } )
  }

  const getEmployees = ()=>{
    Axios.get('http://localhost:3001/employees').then((response)=>{//response will get whatever we get from backend
      setemployeelist(response.data);//array of the database
    })
  }

  const updateEmployeeSalary = (id)=>{
    Axios.put('http://localhost:3001/update', {
      salary: newsalary,
      id: id
    }).then((response)=>{
      alert('updated')
      setemployeelist(
        employeelist.map((val)=>{
          //go through the database, if its the same employee using the id then keep everything the same but change the salary
          //else 
          return val.id==id ? {
            id: val.id, 
            name: val.name, 
            position: val.position, 
            age: val.age, 
            salary: newsalary
          }: val //else, keep the database the same
        })
      )
    })
  }

  const deleteEmployee = (id)=>{
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
      setemployeelist(employeelist.filter((val)=>{
        return val.id!=id //show all the rows of the array where id is not the same as the id we are passing in the method. 
      }))
    });
  }






  
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={ (event)=> {setname(event.target.value)} }></input>
        <label>Age:</label>
        <input type="number" onChange={ (event)=> {setage(event.target.value)} }></input>
        <label>Position:</label>
        <input type="text" onChange={ (event)=> {setposition(event.target.value)} }></input>
        <label>salary:</label>
        <input type="number" onChange={ (event)=> {setsalary(event.target.value)} }></input>
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      <hr/>
    
      
      <div className="employees">
        <button onClick={getEmployees}>show all employees</button>
        {employeelist.map((val,key)=>{
          return( 
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Salary: {val.salary}</h3> 
              </div>
              <div>
                <input type="number" placeholder="update salary" onChange={(event)=>{setnewsalary(event.target.value)}}></input>
                <button onClick={()=>{
                  updateEmployeeSalary(val.id)
                }}>Update</button>

                <button onClick={()=> {deleteEmployee(val.id)}}>Delete</button> 
              </div>
            </div>
            
            )
        })}
      </div>
     

    </div>
  );
}

export default App;
