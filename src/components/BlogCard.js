import React from "react";
import { Card } from "react-bootstrap";
import "./BlogCard.css";
const BlogCard = ({ blogData }) => {
  return (
    <Card className="col-md-4 mt-5 zoom " style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="text-muted">{blogData.title}</Card.Title>
        <Card.Text>
        {blogData.text}
        </Card.Text>
        <Card.Link href="#">Read More</Card.Link>
       
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
