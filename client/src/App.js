import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [position, setposition] = useState("");
  const [salary, setsalary] = useState(0);

  const addEmployee = ()=>{
    Axios.post('http://localhost:3001/create', {
      name:name, 
      age:age, 
      position:position, 
      salary:salary,
      }
    ).then( ()=>{console.log("success")} )
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

    </div>
  );
}

export default App;
