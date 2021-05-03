import React from "react";
import BlogCard from './BlogCard.js';
import "./Blogs.css";

const Blog = () => {
  const myBlog = [
    {
      title: "JavaScript — 10 most important and useful functions",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolorem sed sapiente, minus dicta nam exercitationem inventore culpa quo, illo aliquid incidunt consectetur repellat sint qui perspiciatis? Animi, voluptate nulla. `,
    },
    {
      title: "DOM and ReactJS Fundamentals",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, adipisci deserunt dolores sed vero optio dicta, tempore deleniti blanditiis totam, cumque dolorum quam! Quas eaque accusantium quidem molestiae est provident. `,
    },
    {
      title: "10 Important things about Web Accessibility",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit accusamus architecto dolorum maxime ducimus aut quas rerum quam aliquid deleniti, provident odio! Dicta cumque enim ea a officia dolore.. `,
    },
  ];

  return (
    <div className="blogs" id="Blogs">
      <div className="project-slides">
        <div className="text-center">
          <h2 className="heading">Blogs</h2>
          <h1 className="mainHeader">My Blogs</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {myBlog.map((each, index) => (
            <BlogCard blogData={each} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Blog;
