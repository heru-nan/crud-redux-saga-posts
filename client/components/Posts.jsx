import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import HiddenForm from "./utils";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { REQUEST_POSTS } from "../store/types";

const Posts = ({ posts, visibility, switchVisibility, fetchPosts }) => {
  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (firstRender.current && posts.length === 0) {
      firstRender.current = false;
      fetchPosts();
      return;
    }
  });
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
    visibility: state.utils.visibility["form"],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchVisibility: () => {
      dispatch(actions.switchVisibility());
    },
    fetchPosts: () => {
      dispatch({ type: REQUEST_POSTS });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
