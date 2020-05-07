import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { REQUEST_POSTS } from "../store/types";

const Post = ({ post, fetchPosts }) => {
  /*malo*/

  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (firstRender.current && !post) {
      firstRender.current = false;
      fetchPosts();
      return;
    }
  });

  return post ? (
    <div className="container">
      <h1>🐜{post.title}🐜</h1>
      <article>{post.description}</article>
      {` `}
      <div className="buttons">
        <Link to="/">
          <button>back</button>
        </Link>
        {`  `}
        <Link to="/">
          <button className="red" onClick={() => deletePost(id)}>
            ‼ delete
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
};

const mapStateToProps = ({ posts }, { match }) => {
  const { id } = match.params;
  const post = posts.filter((post) => post.id === Number(id));
  return {
    post: post[0] ? post[0] : null,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deletePost: () => {},
  fetchPosts: () => dispatch({ type: REQUEST_POSTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
