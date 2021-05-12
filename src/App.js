import React, { useState, useEffect } from "react";
import { NavbarItem } from "./NavbarItem";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Entry from "./Entry";
import "./App.css";
import BlogPosts from "./BlogPosts";

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
      }
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
          <BlogPosts blogPosts={blogPosts} />
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
