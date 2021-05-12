import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

function BlogPosts({ blogPosts }) {
  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <div>
            {blogPosts.map((post, index) => (
              <Card className="mt-5" body key={index}>
                <CardTitle tag="h5">{post.blogTitle}</CardTitle>
                <CardText>{post.blogPost}</CardText>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogPosts;
