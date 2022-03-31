import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Restaurant = ({ searchText }) => {
  //   useState("")

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  return (
    <div className="grid grid-cols-3 gap-5 items-center ">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Restaurant;
