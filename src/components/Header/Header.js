import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-violet-800 flex items-center justify-between p-4">
      <h1 className="text-xl text-white ">Awesome Meals</h1>

      <nav className="text-white">
        <Link className="pr-2" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
