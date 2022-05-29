import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const HOST = "http://localhost:5000";

const getItem = ( setItemDetail ,itemId ) => {
  fetch(HOST + "/api/items/" + itemId)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data ? setItemDetail(data) : null
    });
};

function Item({ items, category_id }) {
  const [itemDetail, setItemDetail] = useState("hellu");

  useEffect(() => {
    items ? getItem(setItemDetail, items) : null;
  }, []);
  return (
    <>
      <div className="p-2 flex justify-between w-32  items-center shadow-md rounded-lg">
        {" "}
        <h1>{itemDetail.name}</h1>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </>
  );
}

export default Item;
