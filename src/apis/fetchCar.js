async function fetchCar({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`https://vse-react-basic.vercel.app/api/cars/${id}`);

  if (!res.ok) {
    throw new Error(`cars/${id} fetch not ok`);
  }

  return res.json();
}

export default fetchCar;
