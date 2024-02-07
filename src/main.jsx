import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import WebFont from "webfontloader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App.jsx";
import NotFound from "./components/NotFound";
import Home from "./components/home/Home";
import Demos from "./components/demos/Demos";
import Demo from "./components/demos/Demo";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import { RecoilRoot } from "recoil";

WebFont.load({
  google: {
    families: ["Raleway:500,700,900"],
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "demos",
        element: <Demos />,
      },
      {
        path: "demos/:slug",
        element: <Demo />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
