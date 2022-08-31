import React, {useState} from "react";

function Item({ name, category }) {
  const [strikeout, setStrikeout]=useState(false)
  const itemClass=strikeout ? "Items li in-cart" : "Items"
  const btnClass=strikeout? "button remove" : "button add"
  const btnText=strikeout?  "Remove from Cart" : "Add to Cart"
  const handleClick=e=>{
    e.preventDefault()
    setStrikeout(!strikeout)
    e.target.innerHTML=btnText
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleClick}>{btnText}</button>
    </li>
  );
}

export default Item;
