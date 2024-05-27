async function fetchModelList({ queryKey }) {
  const brand = queryKey[1];
  const res = await fetch(
    `https://vse-react-basic.vercel.app/api/models?brand=${brand}`,
  );

  if (!res.ok) {
    throw new Error(`models/?brand=${brand} fetch not ok`);
  }

  return res.json();
}

export default fetchModelList;
