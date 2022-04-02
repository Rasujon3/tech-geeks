import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";
import { blogContext } from "../../App";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs] = useContext(blogContext);

  const blog = blogs.find((blog) => blog._id == id);

  return (
    <>
      <div className="header-gradient" />
      <div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>back</p>
        </button>
        <div className="blog-details">
          <div className="blog-image">
            <img src={blog?.imageURL} alt="img" />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
