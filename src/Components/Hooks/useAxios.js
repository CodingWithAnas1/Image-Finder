import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (param) => {
  const [response, setresponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await axios(url);
      setresponse(data.results);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAxios;
