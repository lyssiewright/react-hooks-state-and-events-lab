import React, {useState} from "react";

function Item({ name, category }) {
  let [isInCart, setIsInCart] = useState(false)
  function handleClick(){
  setIsInCart((isInCart) => !isInCart)
}


  const appClass = isInCart ? "in-cart" : ""
  const buttonClass = isInCart ? "remove" : "add"

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{isInCart ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
