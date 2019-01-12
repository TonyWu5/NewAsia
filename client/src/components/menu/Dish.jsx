import React from 'react';

const Dish = props => {
  const { info } = props;
  return (
    <div>
      <div>Number {info.id}</div>
      <img src={info.imageUrl} alt= {info.alter} height={183} width={275}/>
      <div className= "title" chn={`${info.chiName}`} eng={info.engName}> {`${info.chiName}`} {info.engName}</div>
      <div>{info.numPrice}</div>
      <div>{info.priceLetter}</div>
    </div>
  );
}


export default Dish