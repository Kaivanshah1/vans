import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../App.css";
import { hostvanss } from "./api";

export function hostvans({ params }) {
  return hostvanss(params.id);
}
export default function Hostvans() {
  const [vans, setVans] = React.useState(data);

  const data = useLoaderData();

  const hostVansElement = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVansElement}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
