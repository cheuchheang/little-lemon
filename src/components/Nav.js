import React from "react";
import Logo from "./../assets/Logo.svg";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul
      style={{
        display: "flex",
        listStyleType: "none",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <li>
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
      </li>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Menu</a>
      </li>
      <li>
        <a href="/booking">Reservations</a>
      </li>
      <li>
        <a href="">Order Online</a>
      </li>
      <li>
        <a href="">Login</a>
      </li>
    </ul>
  );
};

export default Nav;
