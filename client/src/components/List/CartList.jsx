import React, { useEffect, useState } from "react";
import ItemInCart from "./ItemInCart";
const HOST = import.meta.env.VITE_URL;

const fetchUser = (setItemIdArray) => {
  fetch(HOST + "/api/users/62923383dbb7a1bbfdb83e79")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setItemIdArray(data.items);
    });
};
const fetchItemAndCategory = (id) => {
  fetch(HOST + "/api/items/" + id)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
};

function CartList() {
  const [itemIdArray, setItemIdArray] = useState();
  useEffect(() => {
    fetchUser(setItemIdArray);
    // fetchItemAndCategory(id)
  }, []);
  return (
    <>
      <h1>Hellu</h1>
      <div>
        {itemIdArray &&
          itemIdArray.map(({ _id,amount}) => (
            <ItemInCart key={_id} itemId ={_id} amount={amount}></ItemInCart>
          ))}
      </div>
    </>
  );
}

export default CartList;
