import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const url = `https://retro-tech-talks.herokuapp.com/getBlog/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

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
