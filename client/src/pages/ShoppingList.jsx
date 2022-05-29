import React from "react";
import Shopping from "../components/Shopping/Shopping";
import { useEffect, useState } from "react";
const HOST = "http://localhost:5000";

let getCategory = (setShopping) => {
  fetch(HOST + "/api/categories")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setShopping(data);
    });
};
function ShoppingList() {
  document.body.style.backgroundColor = "#fff";

  const [shoppings, setShopping] = useState(null);

  useEffect(() => {
    getCategory(setShopping);
  }, []);
  return (
    <>
      <div className=" bg-slate-100 flex flex-col flex-1 px-4 py-5 gap-5">
        {shoppings &&
          shoppings.map(({ _id, name, items }) => (
            <Shopping
              key={_id}
              name={name}
              items={items}
            ></Shopping>
          ))}
      </div>
    </>
  );
}

export default ShoppingList;
