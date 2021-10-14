import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedVal] = useState('init')

  function toggleSelected(e) {
    setSelectedVal((selectedCategory) => e.target.value)
  }

  function prepareItems(value) {
    console.log(value)
    if(value === 'init' || value === 'All') {
      return renderItems(items)
    }
    else if(value !== 'All') {
      return renderItems(items.filter(item => item.category === value))
    }
    
  }

  function renderItems(itemArray) {
    console.log(itemArray)
    return (itemArray.map((item) => (
                <Item key={item.id} name={item.name} category={item.category} />
              )))
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={toggleSelected}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {prepareItems(selectedCategory)}
      </ul>
    </div>
  );
}

export default ShoppingList;
