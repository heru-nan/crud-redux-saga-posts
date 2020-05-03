import React, { useState } from "react";
import { Link } from "react-router-dom";
import HiddenForm from "./utils";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const Posts = ({ posts, visibility, switchVisibility }) => {
  return (
    <div className="container">
      <h1>hello, world for posts 👨🏽‍💻 </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title} 📂 </Link>
          </li>
        ))}
      </ul>
      <button onClick={switchVisibility}>More Posts</button>
      {visibility && <HiddenForm />}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    visibility: state.utils.visibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchVisibility: () => dispatch(actions.switchVisibility()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
