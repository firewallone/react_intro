import { useState, useEffect } from "react";

const localCache = {};

export default function useModelList(brand) {
  const [modelList, setModelList] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!brand) {
      setModelList([]);
    } else if (localCache[brand]) {
      setModelList(localCache[brand]);
    } else {
      requestModelList();
    }

    async function requestModelList() {
      setModelList([]);
      setPending(true);
      const res = await fetch(
        `https://vse-react-basic.vercel.app/api/models?brand=${brand}`,
      );
      const json = await res.json();
      localCache[brand] = json || [];
      setModelList(localCache[brand]);
      setPending(false);
    }
  }, [brand]);

  return [modelList, pending];
}
