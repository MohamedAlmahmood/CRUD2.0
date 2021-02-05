import './App.css';
import {useState} from "react";

function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [Position, setposition] = useState("");
  const [salary, setsalary] = useState(0);



  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={ (event)=> {setname(event.target.value)} }></input>
        <label>Age:</label>
        <input type="number" onChange={ (event)=> {setage(event.targer.value)} }></input>
        <label>Position:</label>
        <input type="text" onChange={ (event)=> {setposition(event.target.value)} }></input>
        <label>salary:</label>
        <input type="number" onChange={ (event)=> {setsalary(event.target.value)} }></input>
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
