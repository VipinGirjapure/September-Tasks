import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import CartPage from "./CartPage";
import ProductsList from "./ProductsList";
import SingleProduct from "./SingleProduct";
import Header from "../Header"
const RoutingProducts = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="getPostById/:id" element={<SingleProduct />} />
          <Route path="cartpage/getPostById/:id" element={<SingleProduct />} />
          <Route path="/cartpage" element={<CartPage/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutingProducts;
