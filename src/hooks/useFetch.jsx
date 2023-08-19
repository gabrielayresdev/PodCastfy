import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let json, response;
    try {
      setError(null);
      setLoading(true);
      setData(null);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error();
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      setData(json);
    }
    return { json, response };
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
