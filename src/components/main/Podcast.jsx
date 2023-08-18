import React from "react";
import { useParams } from "react-router-dom";

const Podcast = () => {
  const { id } = useParams();
  return <div>{id ? id : null}</div>;
};

export default Podcast;
