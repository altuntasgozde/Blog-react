import React, { useState, useEffect } from "react";
import { NavbarItem } from "./NavbarItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entry from "./Entry";
import "./App.css";
import { PostDetail } from "./PostDetail";
import HomePage from "./HomePage";
import axios from "axios";

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const [postStatus, setPostStatus] = useState(false);

  const [title, setTitle] = useState("");

  const [textarea, setTextarea] = useState("");

  const TitleValue = (e) => {
    setTitle(e.target.value);
  };

  const TextareaValue = (e) => {
    setTextarea(e.target.value);
  };

  // let postDate = new Date();

  // let newdate = new Intl.DateTimeFormat("en-GB", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // }).format(postDate);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/blog-posts")
      .then((res) => setBlogPosts(res.data.data));

    console.log(blogPosts);
  }, []);

  const GetText = async (e) => {
    const response = await axios.post("http://localhost:1337/api/blog-posts", {
      data: {
        title: title,
        post: textarea,
      },
    });

    const newPost = response.data.data;
    setBlogPosts([...blogPosts, newPost]);

    setPostStatus(true);

    setTitle("");
    setTextarea("");

    setTimeout(() => {
      setPostStatus(false);
    }, 3000); 

    e.preventDefault();
  };

  return (
    <Router>
      <div className="App">
        <NavbarItem />
        <Switch>
          <Route exact path="/">
            <HomePage blogPosts={blogPosts} />
          </Route>
          <Route
            path="/post/:id"
            children={<PostDetail blogPosts={blogPosts} />}
          />
          <Route exact path="/entry">
            <Entry
              TitleValue={TitleValue}
              TextareaValue={TextareaValue}
              GetText={GetText}
              postStatus={postStatus}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
