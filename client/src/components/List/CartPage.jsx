import React from "react";
import Banner from "./Banner";
import CartList from "./CartList";
function CartPage() {
  return (
    <>
      <main className=" bg-yellow-100 flex flex-col flex-1 px-4 py-5 gap-5">
        <Banner></Banner>
        <CartList></CartList>
      </main>
    </>
  );
}

export default CartPage;
