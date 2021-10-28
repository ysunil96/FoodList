import React, { useState } from "react";
import Foodcard from "./Foodcard";
import "./style.css";

import Menu from "./menuApi"

const Hotel = () => {
  const [MenuData, setMenuData] = useState(Menu)

  const filterItem = (category) => {
    const updateList = Menu.filter((curElement)=> {
      return curElement.category === category;
    });
    setMenuData(updateList);
}
  
  return (
    <>
      <div className="container">
        
      <div className="nav">
        <div className="nav-menu">
          <button onClick={() => filterItem("Breakfast")} >BreakFast</button>
          <span className="innerBut">
            <button onClick={() => filterItem("Lunch")}>Lunch</button>
            <button onClick={() => filterItem("Evening")} >Evening</button>
            <button onClick={() => filterItem("Dinner")} >Dinner</button>
          </span>
          <span className="lastbut"><button onClick={() => setMenuData(Menu)} >All</button></span>
          
        </div>
      </div>
        <Foodcard MenuData={ MenuData}/>
        
      </div>
    </>
  );
};

export default Hotel;
