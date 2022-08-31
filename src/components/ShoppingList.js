import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [filteredItems, setFilteredItems]=useState(items)
  // const [cat, setCat] = useState("All")
 
  // console.log(cat)
  const handleClick=(e)=>{
    // e.preventDefault()
    if(e.target.value==="All")
      setFilteredItems(items)
    else 
      setFilteredItems(items.filter(item=>item.category===e.target.value))
  }
  
  console.log("reednered")
  return (
    <div className="ShoppingList">
      <div className="Filter">
        
        <select name="filter" onChange={handleClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
