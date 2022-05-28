import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const HOST = "http://full-stack-shoppingify.herokuapp.com"

let fetchItem = (setCategory) => {
  fetch(HOST + "/api/categories")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setCategory(data);
    });
};
function AddItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const url = await fetch(HOST + "/api/items", requestOptions);
    const json = await url.json();
    console.log(json);
  };
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchItem(setCategory);
  }, []);
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true, maxLength: 100 })}
          className="input input-bordered w-full max-w-xs"
        />
        <select
          {...register("category")}
          className="select select-bordered w-full max-w-xs"
        >
          {category
            ? category.map(({ _id, name }) => (
                <option value={_id}>{name}</option>
              ))
            : null}
        </select>
        <input type="submit" className="btn" />
      </form>
    </>
  );
}

export default AddItem;
