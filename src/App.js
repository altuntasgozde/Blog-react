import React, { useState, useEffect } from "react";
import { NavbarItem } from "./NavbarItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entry from "./Entry";
import "./App.css";
import { PostDetail } from "./PostDetail";
import HomePage from "./HomePage";

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

  let postDate = new Date();

  let newdate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(postDate);

  const GetText = (e) => {
    const blogId = Math.floor(Math.random() * 10000) + 1;

    setBlogPosts((oldPosts) => [
      ...oldPosts,
      {
        blogTitle: title,
        blogPost: textarea,
        id: blogId,
        date: newdate,
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
        <Switch>
          <Route exact path="/">
            <HomePage blogPosts={blogPosts} />
          </Route>
          <Route path="/post/:id" children={<PostDetail blogPosts={blogPosts}/>} />
          <Route exact path="/entry">
            <Entry
              TitleValue={TitleValue}
              TextareaValue={TextareaValue}
              GetText={GetText}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
