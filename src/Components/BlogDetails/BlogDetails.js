import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="header-gradient">
      <h1>Blog Details: {id}</h1>
    </div>
  );
};

export default BlogDetails;
