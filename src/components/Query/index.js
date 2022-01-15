import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, limit, name, offset }) => {
  const { data, loading, error, fetchMore } = useQuery(query, {
    variables: { limit: limit, offset: offset, name: name }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;