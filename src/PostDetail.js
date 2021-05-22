import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

export const PostDetail = ({ blogPosts }) => {
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
  });

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            {blogPosts
              .filter((post) => post.id == id)
              .map((filteredpost, index) => (
                <Card className="mt-5 mb-5" body key={index}>
                  <CardTitle className="detailTitle" tag="h5">{filteredpost.blogTitle}</CardTitle>
                  <CardText>
                    <small className="text-muted">
                    {filteredpost.date}
                    </small>
                  </CardText>
                  <CardText>{filteredpost.blogPost}</CardText>
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
