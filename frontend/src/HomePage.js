import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import Pagination from "./Pagination";

function HomePage({ blogPosts }) {
  const [postsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <div>
              {currentPosts.map((item, index)=> {
                return (
                  <Card className="mt-5" body key={index}>
                  <CardTitle tag="h5">{item.attributes.title}</CardTitle>
                  <CardText>
                    {item.attributes.post.slice(0, 360).concat("...")}
                    <Link
                      style={{ textDecoration: "none", borderRadius:"15px", padding:"7px" }}
                      to={"/post/" + item.id}
                      className="readMore"
                    >
                      Read more
                    </Link> 
                  </CardText> 
                  <CardText>
                    {/* <small className="text-muted">{post.date}</small> */}
                  </CardText>
                </Card>
                )
              })}
            </div>
          </Col>
        </Row>
        <Row className="pagination">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={blogPosts.length}
              paginate={paginate}
            />
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
