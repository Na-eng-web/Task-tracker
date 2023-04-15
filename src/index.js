import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Loginform from "./componant/Loginform";
import Wrapper from "./componant/Contex/contex";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
    </BrowserRouter>
  </>
);
