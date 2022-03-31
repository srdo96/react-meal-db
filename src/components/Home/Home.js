import React, { useState } from "react";
import Restaurant from "../Restaurant/Restaurant";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const searchMeal = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="bg-indigo-200">
      <h1 className="text-center text-3xl pt-8">Search Your Awesome Food</h1>
      <div className="flex justify-center my-5">
        <input
          onChange={searchMeal}
          className="rounded-xl text-center border border-indigo-600 "
          type="text"
          placeholder="search hear"
        />
      </div>
      <Restaurant searchText={searchText}></Restaurant>
    </div>
  );
};

export default Home;
