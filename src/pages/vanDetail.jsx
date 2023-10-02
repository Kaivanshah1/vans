import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

export default function Vansdetail() {
  const { id } = useParams();
  const location = useLocation();
  const [van, setVan] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, [id]);

  const search = location.state?.search || "";
  const typ = location.state?.type || "all";
  return (
    <div>
      {van ? (
        <div>
          <Link to={`..${search}`} relative="path">
            Back to {typ}
          </Link>
          <img src={van.vans.imageUrl} alt={van.name} />
          <h2>{van.vans.name}</h2>
          <p>
            ${van.vans.price}
            <span>/day</span>
          </p>
          <p>{van.vans.description}</p>
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
}
