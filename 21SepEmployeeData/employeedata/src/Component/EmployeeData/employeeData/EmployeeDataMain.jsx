import "./EmployeeData.css";
import { useState } from "react";
import { Data } from "../EmployeeData.jsx";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';

const EmployeeDataMain = () => {
  const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(10);
   
  let filtered = Data.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.userName.toLowerCase().includes(search.toLowerCase()) ||item.email.toLowerCase().includes(search.toLowerCase()) ) {
      return item;
    }
  });
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
  return (
    <>
      <div className="EmpDataHeaderContainer">
        <div className="EmpDataLogo">Employee Data List</div>
        <div className="searchContainer">

        <input
          type="text"
          className="EmpDataSearch"
          placeholder="Search By Name or Email"
          onChange={(e) => setSearch(e.target.value)}
          />
     <i class="fa fa-search" aria-hidden="true"></i>
          </div>
      </div>
      <div className="note">Click On Employee Name to see datails</div>

      {filtered.length === 0 ? (
        <h1 style={{ textAlign: "center", color: "white" }}>
          Employee Not Found
        </h1>
      ) : (
        filtered.map((item) => (
          <ul key={item.id} style={{backgroundColor: generateColor()}} >
            {/* <li>Employee ID : {item.id}</li> */}
            <Link
              to={`/data/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li >Employee Name :<span className="listName">{  item.userName}</span> </li>
            <li>Email :         {item.email}</li>
            <li>Contact : {item.userContact}</li>
            <li>City : {item.userCity}</li>
            </Link>
            {/* <li>State : {item.userState}</li> */}
          </ul>
        ))
      )}
      {
    //     <InfiniteScroll
    //     pageStart={0}
    //     loadMore={loadMore}
    //     hasMore={hasMore}
    //     loader={<h4 className="loader">Loading...</h4>}
    //     useWindow={false}
    //   >
    //     {showItems(data)}
    //   </InfiniteScroll>
      }
      {/* <Pagination */}
      {/* <Pagination count={10} /> */}
    </>
  );
};

export default EmployeeDataMain;
