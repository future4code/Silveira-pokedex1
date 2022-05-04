import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getData = () => {
    setIsLoading(true);
    setError(undefined);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [data, isLoading, error];
};
