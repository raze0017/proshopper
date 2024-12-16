import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";
export default function Shop() {
  return (
    <>
      <div className="prod text-3xl ">Available Products</div>
      <Product />
    </>
  );
}
