export async function hostvanss(id) {
  const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
