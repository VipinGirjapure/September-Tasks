import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
// import AstNotFond from "./Pages/AstNotFound.jsx/AstNotFound";
// import Details from "./Pages/Details/Details";
import SignInPage from "./Pages/SignIn/SignInPage";
// const SignInPage = lazy(() => import("./Pages/SignIn/SignInPage"));
// const AstNotFond = lazy(() => import("./Pages/AstNotFound.jsx/AstNotFound"));
// import Demo from "./Components/Demo";
const Details = lazy(() => import("./Pages/Details/Details"));


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />

        <Suspense fallback={<h1>Page is loading...</h1>}>
          <Routes>
            <Route path="/" element={<SignInPage />} />

            <Route path="/details" element={<Details />} />
            <Route path="/details/:id" element={<Details />} />
            {/* <Route path="/details/idnotfound" element={<AstNotFond />} /> */}

            <Route path="*" element={<h1>Page Not Found</h1>} />
            {/* <Route path="" element={}/> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
 </>
  );
}

export default App;

// const App = () => {
//   return (
//     <>
//       <Demo />
//     </>
//   );
// };
// export default App;
