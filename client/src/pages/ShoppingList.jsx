import React from "react";
import Shopping from "../components/Shopping/Shopping";
import { useEffect, useState } from "react";

import Banner from "../components/Banner/Banner";
let fetchItem = (setItems) => {
  // fetch("http://localhost:5000/api/items")
    fetch("https://full-stack-shoppingify.herokuapp.com/api/items")

    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setItems(data);
    });
};

function ShoppingList() {
  document.body.style.backgroundColor = "#fff";

  const [shoppings, setShopping] = useState(null);
  useEffect(() => {
    fetchItem(setShopping);
  }, []);
  return (
    <>
      <div className=" bg-slate-100 flex flex-col flex-1 px-4 py-5 gap-5">
        {shoppings &&
          shoppings.map(({ _id, name, items }) => (
            <Shopping key={_id} name={name} items={items}></Shopping>
            // console.log(_id)
          ))
          }
        {/* <Banner></Banner> */}
      </div>
    </>
  );
}

export default ShoppingList;
