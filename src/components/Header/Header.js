import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  const searchMeal = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <div className="bg-violet-800 flex items-center justify-between p-4">
      <h1 className="text-xl text-white ">Awesome Meals</h1>
      <input
        onChange={searchMeal}
        className="rounded-xl text-center"
        type="text"
      />
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
