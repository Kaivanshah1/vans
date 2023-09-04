import React from "react";
import "../App.css";
import {
  Link,
  useSearchParams,
  useLoaderData,
  useRouteError,
} from "react-router-dom";

export async function loader() {
  return fetch("/api/vans")
    .then((data) => data.json())
    .then((res) => res.vans);
}

export default function Home() {
  const [searchparams, setSearchparams] = useSearchParams();
  const typefilter = searchparams.get("type");
  const vans = useLoaderData();
  const errr = useRouteError();
  const kalabala = typefilter
    ? vans.filter((char) => char.type.toLowerCase() === typefilter)
    : vans;
  throw {
    message: "this is error",
  };
  const kala = kalabala.map((items) => (
    <Link key={items.id} to={`/vans/${items.id}`}>
      <div key={items.id} className="van-tile">
        <img src={items.imageUrl} />
        <div className="van-info">
          <h3>{items.name}</h3>
          <p>
            ${items.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${items.type} selected`}>{items.type}</i>
      </div>
    </Link>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Link
        to="?type=simple"
        state={{ search: `?${searchparams.toString()}`, type: typefilter }}
      >
        Simple
      </Link>
      <Link to="?type=rugged">Rugged</Link>
      <Link to="?type=luxury">Luxury</Link>
      <Link to=".">All</Link>
      <h1>{error.message}</h1>
      {kala}
    </div>
  );
}
