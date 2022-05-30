import React, { useEffect, useState } from "react";
const HOST = import.meta.env.VITE_URL;

function ItemInCart({ itemId }) {
  const [itemName, setItemName] = useState();
  const [categoryName, setCategoryName] = useState();

  const getItemName = (id) => {
    fetch(HOST + "/api/items/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItemName(data.name);
      });
  };
//   const getCategoryName = (id) => {
//     fetch(HOST + "/api/categories/" + id)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         return data.name;
//       });
//   };

  useEffect(() => {
    getItemName(itemId,setItemName);
    // fetchItemAndCategory(id)
  }, []);
  return <div>{itemName}</div>;
}

export default ItemInCart;
