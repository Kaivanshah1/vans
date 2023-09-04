import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Profile from "../pages/Profile";

export default function Home() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };
  return (
    <>
      <header>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          #VanLife
        </NavLink>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "my-link" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "my-link" : null)}
        >
          About
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
