import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (options, axisoInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    date: null,
  });

  const [trigger, setTrigger] = useState(0);

  if (!options.url) {
    return;
  }

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axisoInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
