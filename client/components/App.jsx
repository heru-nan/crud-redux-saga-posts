import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./Post";

export default function App({ state }) {
  const [posts, setPosts] = useState(state.posts);
  const [moreFlag, setMoreFlag] = useState(false);

  const handleAddPost = (e) => {
    e.preventDefault();
    const title = e.target["title"].value;
    if (!title || !e.target["content"].value) {
      return setMoreFlag(false);
    }
    const content = `<p>${e.target["content"].value}</p>`;
    setPosts([...posts, { id: `id:${title[0]}`, title, content }]);
    setMoreFlag(false);
  };

  const handleDeletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts posts={posts} setMoreFlag={setMoreFlag} />
          {moreFlag && (
            <HiddenForm
              handleAddPost={handleAddPost}
              setMoreFlag={setMoreFlag}
            />
          )}
        </Route>
        <Route exact path="/posts/:id">
          <Post posts={posts} handleDeletePost={handleDeletePost} />
        </Route>
      </Switch>
    </Router>
  );
}

const Posts = ({ posts, setMoreFlag }) => (
  <div className="container">
    <h1>hello, world for posts 👨🏽‍💻 </h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title} 📂 </Link>
        </li>
      ))}
    </ul>
    <button onClick={() => setMoreFlag(true)}>More Posts</button>
  </div>
);

const HiddenForm = ({ handleAddPost, setMoreFlag }) => (
  <form className="container" onSubmit={handleAddPost}>
    <label>
      Title: <br />
      <input type="text" id="title" name="title" />
    </label>
    <label>
      Content:
      <br />
      <textarea id="content" name="content"></textarea>
    </label>
    <div>
      <button type="submit">Send</button>
      <button className="red" onClick={() => setMoreFlag(false)}>
        cancel
      </button>
    </div>
  </form>
);
