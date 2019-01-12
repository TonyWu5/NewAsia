import React from 'react';
import Dish from './Dish.jsx';


const Menu = (props) => {
  return (
    <div>Menu
      {props.dishes.map((dish, index) => (
        <Dish info={dish}/>
      ))}
   </div>
  );
};

export default Menu
