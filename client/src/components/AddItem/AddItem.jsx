import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

let fetchItem = (setCategory) => {
  fetch("http://localhost:5000/api/categories")
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
  const onSubmit = (data) => console.log(data);
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
        <select {...register("item")} className="select select-bordered w-full max-w-xs">
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
