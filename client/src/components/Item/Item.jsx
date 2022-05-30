import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const HOST = import.meta.env.VITE_URL;

let addCart = async (data) => {
  const dataToSubmit = {
    item: data._id,
    user: "62923383dbb7a1bbfdb83e79",
    amount: 0,
  };
  // console.log(dataToSubmit)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataToSubmit),
  };
  const url = await fetch(HOST + "/api/users/addCart", requestOptions);
  const json = await url.json();
  console.log(json);
};

const getItem = (setItemDetail, itemId) => {
  fetch(HOST + "/api/items/" + itemId)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data ? setItemDetail(data) : null;
    });
};

function Item({ items, category_id }) {
  const [itemDetail, setItemDetail] = useState("hellu");

  useEffect(() => {
    items ? getItem(setItemDetail, items) : null;
  }, []);
  return (
    <>
      <div className=" bg-white p-2 flex justify-between w-32  items-center shadow-md rounded-lg">
        {" "}
        <h1>{itemDetail.name}</h1>
        <FontAwesomeIcon icon={faPlus} onClick={(x) => addCart(itemDetail)} />
      </div>
    </>
  );
}

export default Item;
