import Student from "./components/Student";
import data, { studentData } from './data/studentData';
import './App.css';
import { useState } from "react";

function App() {
  const [ studentRecords, setStudentRecords] = useState(studentData);
  return (
    <div className="App">
      {studentRecords.map((e)=> {
     return <Student studentData={e} />

      })}
      
      </div>
    
  )
}

export default App;
