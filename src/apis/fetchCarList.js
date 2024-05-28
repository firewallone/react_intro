const fetchCarList = async ({ queryKey }) => {
  const { location, brand, model } = queryKey[1];
  const res = await fetch(
    `https://vse-react-basic.vercel.app/api/cars?location=${location}&brand=${brand}&model=${model}`,
  );
  if (!res.ok) {
    throw new Error(`cars fetch not ok`);
  }
  return res.json();
};

export default fetchCarList;
