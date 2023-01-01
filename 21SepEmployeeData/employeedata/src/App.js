
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeDataHeader from './Component/EmployeeData/employeeData/EmployeeDataHeader';
import EmployeeDataMain from './Component/EmployeeData/employeeData/EmployeeDataMain';
import EmployeeDetails from './Component/EmployeeData/employeeData/EmployeeDetails';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<EmployeeDataMain/>}/>  
  <Route path="/data/:id" element={<EmployeeDetails/>}/> 
  <Route path="*" element={<h1>Page Note Found</h1>}/>  

  </Routes>
  </BrowserRouter>
    
  </>
  );
}

export default App;
