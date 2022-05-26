import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function Item( {items} ) {
  return (
    <>
      <div className="p-2 flex justify-between w-32  items-center bg-yellow-100">
        {" "}
        <h1>{items.name}</h1>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </>
  );
}

export default Item;
