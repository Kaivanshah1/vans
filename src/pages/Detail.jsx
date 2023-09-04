import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Detail() {
  const { currentVan } = useOutletContext();
  if (!currentVan) {
    return <h1>Loading...</h1>; // Handle the loading state if currentVan is null
  }
  return (
    <>
      <h1>{currentVan.name}</h1>
      <p>{currentVan.type}</p>
      <p>{currentVan.description}</p>
    </>
  );
}
