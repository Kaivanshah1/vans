import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const { currentVan } = useOutletContext();
  if (!currentVan) {
    return <h1>Loading...</h1>; // Handle the loading state if currentVan is null
  }
  return (
    <>
      <h1>
        ${currentVan.price}
        <span>/day</span>
      </h1>
    </>
  );
}
