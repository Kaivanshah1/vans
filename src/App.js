import React from "react";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Vans1, { loader as kk } from "./pages/van1";
import "./server2";

import Vansdetail from "./pages/vanDetail";
import Header from "./components/Header";
import Host from "./pages/Host";
import Dashbord from "./components/Dashbord";
import Income from "./components/Income";
import Review from "./components/Review";
import Hostvans from "./pages/Hostvans";
import Hostvandetail from "./pages/Hostvandetail";
import Detail from "./pages/Detail";
import Pricing from "./pricing";
import Photos from "./photos";
import Notfound from "./pages/Notfound";
import Error from "./components/Error";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/Auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <AuthProvider>
      <Route element={<Header />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans1 />} loader={kk}>
          <Route index element={<Vans1 />} />
          <Route path=":id" element={<Vansdetail />} />
        </Route>
        <Route path="*" element={<Notfound />} />
        <Route path="host" element={<Host />}>
          <Route path="vans" element={<Hostvans />} />
          <Route index element={<Dashbord />} />
          <Route path="income" element={<Income />} />
          <Route path="review" element={<Review />} />
          <Route path="vans/:id" element={<Hostvandetail />}>
            <Route index element={<Detail />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
    </AuthProvider>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
