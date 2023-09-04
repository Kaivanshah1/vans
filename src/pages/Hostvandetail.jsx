import React from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

export default function Hostvandetail() {
  const params = useParams();
  const [currentVan, setCurrentvan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentvan(data.vans));
  }, [params.id]);
  console.log(params.id);
  if (!currentVan) {
    <h1>Loading...</h1>;
  }
  const kala = {
    color: "red",
  };
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {currentVan ? (
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <NavLink to="." end style={({ isActive }) => (isActive ? kala : null)}>
        Details
      </NavLink>
      <NavLink to="pricing" style={({ isActive }) => (isActive ? kala : null)}>
        Pricing
      </NavLink>
      <NavLink to="photos" style={({ isActive }) => (isActive ? kala : null)}>
        Photos
      </NavLink>
      <Outlet context={{ currentVan }} />
    </section>
  );
}
