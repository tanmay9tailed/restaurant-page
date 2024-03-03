import "./menu.css";
import Card from "./components/card/card";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export default function Menu() {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="upperPart">
        <div className="search">
          <input id="menu-input" type="search" placeholder="Search food items/category" value={search} onChange={(e) => setSearch(e.target.value)} />
          <SearchIcon color="primary" />
        </div>
      </div>
      <div className="lowerPart">
        {foodCat !== null ? (
          foodCat.map((category) => (
            <div key={category._id}>
              <div className="food-category-div">{category.CategoryName}</div>
              <div className="food-items">
                {foodItem !== null ? (
                  foodItem
                    .filter((item) => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((filteredItem) => (
                      <div key={filteredItem._id}>
                        <Card foodItem={filteredItem} options={filteredItem.options[0]} />
                      </div>
                    ))
                ) : (
                  <div>no such data found</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="food-category-div">no categories found</div>
        )}
      </div>
    </>
  );
}
