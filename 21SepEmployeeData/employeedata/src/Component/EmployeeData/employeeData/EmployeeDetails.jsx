import { Data } from "../EmployeeData";
import { Link, useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const singleEmployee = Data.filter((item) => item.id == id);

  return (
    <>
      {" "}
      <h1 className="logo">Employee Details </h1>
      <hr />
      {singleEmployee.map((item) => (
        <ul key={item.id} className="detailsPageContainer">
          <li>Employee Name : {item.userName}</li>
          <li>Email : {item.email}</li>
          <li>Contact : {item.userContact}</li>
          <li>City : {item.userCity}</li>
          {/* <li>State : {item.userState}</li> */}
        </ul>
      ))}
      <div className="gotoContainer">
        <Link to="/" className="gotoLink">
          Go back to list
        </Link>
      </div>
      {/* {console.log(id)} */}
    </>
  );
};
export default EmployeeDetails;
