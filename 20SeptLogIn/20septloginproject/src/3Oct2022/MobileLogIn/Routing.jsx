import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddDetails from "./AddDetails";

import { ContextFunc } from "./ContextComp";
import Dashboard from "./Dashboard";
import Header from "./Header";
import LogInPage from "./LogInPage";
import VerificationPage from "./VerificationPage";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <ContextFunc>
          <Header />
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/verification/adddetails" element={<AddDetails />} />
            <Route path="/verification/dashboard" element={<Dashboard />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </ContextFunc>
      </BrowserRouter>
    </>
  );
};
export default Routing;
