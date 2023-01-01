import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import PagiNation from "./PagiNation";
import PaginationDetails from "./PaginationDetails";
import PaginationUseParam from "./PaginationUseParam";

const RoutingPagination = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagiNation />} />
          <Route path="/blogsdetails" element={<PaginationDetails />} />
          <Route path="/blogsdetails/:page/:id" element={<PaginationUseParam />} />
          <Route
            path="*"
            element={<PageNotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutingPagination;
