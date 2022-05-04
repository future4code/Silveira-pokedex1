import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestDataPokemon = (initialState, url) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getData = async () => {
    setIsLoading(true);
    setError(undefined);
    // axios
    //   .get(url)
    //   .then((res) => {
    //     setIsLoading(false);
    //     setData(res.data);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     setIsLoading(false);
    //   });

    try {
      const res = await axios.get(url)
      setData(res.data)
    } catch (err) {
      alert(`Ocorreu um problema, tente novamente - ${err}`)
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return [data];
};