import React from 'react';

const Menu = (props) => {
  return (
    <div>Menu
      {props.dishes.map((item, index) => (
        <div>
          <img className="image" src={item.imageUrl} alt ="menu item"></img>
          <div className= "title"> `${item.chiName}`</div>
          <div className= "price"></div>
        </div>
      ))}
      <div></div>
   </div>
  );
};

export default Menu