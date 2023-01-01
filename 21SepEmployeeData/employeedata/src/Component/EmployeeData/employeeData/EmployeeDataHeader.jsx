import { useState } from "react";

const EmployeeDataHeader = () => {
  const [search, setSearch] = useState("");
  // console.log(search)
  return (
    <>
      <div className="EmpDataHeaderContainer">
        <div className="EmpDataLogo">Employee Data List</div>
        <input
          type="text"
          className="EmpDataSearch"
          placeholder="Search Employee"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
    </>
  );
};

export default EmployeeDataHeader;
