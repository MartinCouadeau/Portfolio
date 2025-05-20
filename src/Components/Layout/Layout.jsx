import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";

export default function Layout () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(o => !o);

  return (
    <>
      <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
      {isMenuOpen && <Menu />}
      <Outlet />
    </>
  );
}