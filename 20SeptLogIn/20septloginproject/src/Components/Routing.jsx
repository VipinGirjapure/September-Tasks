import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import SignIn from "./SignIn/SignIn";
import SignUpForm from "./SignUp/SignUpForm";
import "../Components/ComponentApp.css"
import Datalist from "./dataList/Datalist";
const Routing = ( ) =>{
    return(<>
    <Header/>

    <BrowserRouter>
   <Routes>
    <Route path= "/" element={<SignIn/>}/>
    <Route path= "/signup" element={<SignUpForm/>}/>
    <Route path="/datalist" element={<Datalist/>}/>
    <Route path= "*" element={<h1>Page Not Found</h1>}/>
   </Routes>
    </BrowserRouter>
    </>)
}

export default Routing;