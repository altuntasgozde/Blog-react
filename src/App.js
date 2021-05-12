import React, { useState, useEffect } from "react";
import { NavbarItem } from "./NavbarItem";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Entry from "./Entry";
import "./App.css";
import { Card, CardText, CardTitle, Col, Container, Row } from "reactstrap";

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const [title, setTitle] = useState("");

  const [textarea, setTextarea] = useState("");

  const TitleValue = (e) => {
    setTitle(e.target.value);
  };

  const TextareaValue = (e) => {
    setTextarea(e.target.value);
  };

  const GetText = (e) => {
    setBlogPosts((oldPosts) => [
      ...oldPosts,
      {
        blogTitle: title,
        blogPost: textarea,
      },
    ]);

    e.preventDefault();
  };

  useEffect(() => {
    console.log(blogPosts);
  });

  return (
    <Router>
      <div className="App">
        <NavbarItem />
        <Route exact path="/">
          <Container>
            <Row>
              <Col md={{ size: 8, offset: 2 }}>
                <div>
                  {blogPosts.reverse().map((post, index) => (
                    <Card className="mt-5" body key={index}>
                      <CardTitle tag="h5">{post.blogTitle}</CardTitle>
                      <CardText>{post.blogPost}</CardText>
                    </Card>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </Route>
        <Route path="/entry">
          <Entry
            TitleValue={TitleValue}
            TextareaValue={TextareaValue}
            GetText={GetText}
          />
        </Route>
      </div>
    </Router>
  );
};

export default App;
