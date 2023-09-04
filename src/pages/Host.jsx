import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Dashbord from "../components/Dashbord";
import Income from "../components/Income";

export default function Home() {
  const kala = {
    color: "red",
    textDecoration: "underline",
  };
  return (
    <>
      <NavLink to={"/"} style={({ isActive }) => (isActive ? kala : null)} end>
        Dashboard
      </NavLink>
      <NavLink to={"income"} style={({ isActive }) => (isActive ? kala : null)}>
        Income
      </NavLink>
      <NavLink to={"review"} style={({ isActive }) => (isActive ? kala : null)}>
        Review
      </NavLink>
      <NavLink to={"vans"} style={({ isActive }) => (isActive ? kala : null)}>
        vans
      </NavLink>
      <Outlet />
    </>
  );
}
