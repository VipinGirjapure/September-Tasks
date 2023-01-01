// import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./Pages/AdminPage/AdminPage";
import MainPage from "./Pages/MainPage.jsx/MainPage";
import UserPage from "./Pages/UserPage/UserPage";

function App() {
  return (<>
<Routes>
  <Route path="/" element={<MainPage/>}/>
  <Route path="/admin" element={<AdminPage/>}/>
  <Route path="/user" element={<UserPage/>}/>
</Routes>
  </>
  );
}

export default App;
