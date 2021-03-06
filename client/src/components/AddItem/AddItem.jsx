import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const HOST = import.meta.env.VITE_URL;

let fetchItem = (setCategory) => {
  fetch(HOST + "/api/categories")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setCategory(data);
    });
};

let submitForm = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const url = await fetch(HOST + "/api/items", requestOptions);
  const json = await url.json();
  console.log(json);
};

function AddItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => await submitForm(data);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchItem(setCategory);
  }, []);
  return (
    <>
      {" "}
      <main className=" bg-slate-100 flex flex-col flex-1 px-4 py-5 gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full gap-1 "
        >
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter the name"
            {...register("name", { required: true, maxLength: 100 })}
            className="input input-bordered w-full max-w-xs"
          />

          {/* <label class="label">
            <span class="label-text">Note (optional)</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Note"
            {...register("note", { required: true, maxLength: 100 })}
            className="input input-bordered w-full max-w-xs"
          />

          <label class="label">
            <span class="label-text">Image (optional)</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Image"
            {...register("Image", { required: true, maxLength: 100 })}
            className="input input-bordered w-full max-w-xs"
          /> */}
          <label class="label">
            <span class="label-text">Category</span>
          </label>

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

          <div className="flex justify-center gap-5 mt-auto ">
            {/* <button
              type="cancel"
              className="btn btn-ghost"
              onclick="#';"
            >
              cancel
            </button> */}
            <input type="submit" className="btn" />
          </div>
        </form>
      </main>
    </>
  );
}

export default AddItem;
