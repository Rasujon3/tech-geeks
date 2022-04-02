import React, { useEffect, useContext } from "react";
import { blogContext } from "../../App";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useContext(blogContext);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogs-container">
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
