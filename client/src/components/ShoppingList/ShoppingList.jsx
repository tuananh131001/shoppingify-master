import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <>
      <div className="bg-red-500 flex-1">
        <h1>Shopping List</h1>
        {items && items.map((item) => <Item items={item}></Item>)}
      </div>
    </>
  );
}

export default ShoppingList;
