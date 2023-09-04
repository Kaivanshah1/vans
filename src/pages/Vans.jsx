import React from "react";
import "../App.css";
import "../server2";
import { Link, useSearchParams } from "react-router-dom";

export default function Home() {
  const [vans, setVans] = React.useState([]);
  const [searchparams, setSearchparams] = useSearchParams();

  const typefilter = searchparams.get("type");
  const kalabala = typefilter
    ? vans.filter((char) => char.type === typefilter)
    : vans;
  console.log(vans);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const kala = kalabala.map((items) => (
    <Link to={items.id} state={{ search: `?${searchparams.toString()}` }}>
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
  function setSearchparamsstring(key, value) {
    const sp = new URLSearchParams(searchparams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Link to={setSearchparamsstring("type", "rugged")}>rugged</Link>
      <Link to={setSearchparamsstring("type", "luxury")}>luxury</Link>
      <Link to={setSearchparamsstring("type", "simple")}>simple</Link>
      <Link to={setSearchparamsstring("type", null)}>All</Link>
      <button
        onClick={() => setSearchparams({ type: "simple" })}
        className={typefilter === "simple" ? "selected" : ""}
      >
        Simple
      </button>
      <button
        onClick={() => setSearchparams({ type: "rugged" })}
        className={typefilter === "rugged" ? "selected" : ""}
      >
        Rugged
      </button>
      <button
        onClick={() => setSearchparams({ type: "luxury" })}
        className={typefilter === "luxury" ? "selected" : ""}
      >
        Luxury
      </button>
      {typefilter ? (
        <button onClick={() => setSearchparams({})}>All</button>
      ) : null}
      <div className="van-list">{kala}</div>
    </div>
  );
}
