import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="header-gradient" />
      <div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>back</p>
        </button>
      </div>
    </>
  );
};

export default BlogDetails;
