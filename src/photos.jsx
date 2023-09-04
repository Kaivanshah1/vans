import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const { currentVan } = useOutletContext();
  if (!currentVan) {
    return <h1>Loading...</h1>; // Handle the loading state if currentVan is null
  }
  return (
    <>
      <img src={currentVan.imageUrl} width={"100px"} />
    </>
  );
}
