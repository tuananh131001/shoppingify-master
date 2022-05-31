import React from "react";
import Shopping from "../components/Shopping/Shopping";
import { useEffect, useState } from "react";
const HOST = import.meta.env.VITE_URL;

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

  const [shoppings, setShopping] = useState(null);

  useEffect(() => {
    getCategory(setShopping);
  }, []);
  return (
    <>
      <main className="bg-slate-100 ">
        <div className="  flex flex-col flex-1 px-4 py-5 gap-5">
          {shoppings &&
            shoppings.map(({ _id, name, items }) => (
              <Shopping key={_id} category_id={_id} category_name={name} items={items}></Shopping>
            ))}
        </div>
      </main>
    </>
  );
}

export default ShoppingList;
