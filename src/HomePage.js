import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

function HomePage({blogPosts}) {

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <div>
              {blogPosts.map((post, index) => (
                <Card className="mt-5" body key={index}>
                  <CardTitle tag="h5">{post.blogTitle}</CardTitle>
                  <CardText>
                    {post.blogPost.slice(0, 360).concat("...")}
                    <Link style={{textDecoration: 'none'}} to={"/post/" + post.id} className="readMore">
                      Read more
                    </Link>
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                    {post.date}
                    </small>
                  </CardText>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
