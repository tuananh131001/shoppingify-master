import React from "react";
import Item from "../Item/Item";

function Shopping({ _id, name, items }) {
    console.log(_id)

  return (
    <div className="flex flex-col gap-2">
      <h1 className=" font-bold">{name}</h1>
      <div className="flex flex-row justify-between gap-3 flex-wrap ">
        {items &&
          items.map((item) => (
            <Item
              key={item._id}
              category_id  = {_id}
              items={item}
             
            ></Item>
          ))}
      </div>
    </div>
  );
}

export default Shopping;
