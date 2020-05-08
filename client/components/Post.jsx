import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import {
  REQUEST_POSTS,
  DELETE_POSTS,
  HANDLE_POST_CHANGE,
  UPDATE_POSTS,
} from "../store/types";

const Post = ({
  post,
  fetchPosts,
  deletePost,
  handleChange,
  edit,
  switchVisibility,
  setChanges,
}) => {
  /*malo*/
  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (firstRender.current && !post) {
      firstRender.current = false;
      fetchPosts();
      return;
    }
  });
  // double click
  let clicks = [];
  let timeout;

  function clickHandler(event, value) {
    event.preventDefault();
    clicks.push(new Date().getTime());
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      if (
        clicks.length > 1 &&
        clicks[clicks.length - 1] - clicks[clicks.length - 2] < 300
      ) {
        switchVisibility(value);
      } else {
        console.log("single");
      }
    }, 250);
  }

  return post ? (
    <div
      className="container"
      onClick={(e) => {
        if (e.target.nodeName !== "H1" && e.target.nodeName !== `TEXTAREA`) {
          if (edit.title) {
            switchVisibility("title");
            setChanges("title");
          }
        }
        if (
          e.target.nodeName !== "ARTICLE" &&
          e.target.nodeName !== `TEXTAREA`
        ) {
          if (edit.description) {
            switchVisibility("description");
            setChanges("description");
          }
        }
      }}
    >
      {edit.title ? (
        <textarea
          onChange={(e) => {
            handleChange(e);
          }}
          onClick={handleChange}
          defaultValue={`${post.title}`}
          className="inputH1"
        />
      ) : (
        <h1
          style={{ border: "2px black solid" }}
          onClick={(e) => clickHandler(e, "title")}
        >
          🐜{post.title}🐜
        </h1>
      )}
      {edit.description ? (
        <textarea
          className="descriptionInput"
          onChange={(e) => {
            handleChange(e);
          }}
          onClick={handleChange}
          defaultValue={`${post.description}`}
        />
      ) : (
        <article onClick={(e) => clickHandler(e, "description")}>
          {post.description}
        </article>
      )}
      {` `}
      <div className="buttons">
        <Link to="/">
          <button>back</button>
        </Link>
        {`  `}
        <Link to="/">
          <button className="red" onClick={() => deletePost()}>
            ‼ delete
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
};

const mapStateToProps = ({ posts, utils }, { match }) => {
  const { id } = match.params;
  const post = posts.filter((post) => post.id === Number(id));
  return {
    post: post[0] ? post[0] : null,
    edit: {
      title: utils.visibility.title,
      description: utils.visibility.description,
    },
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  deletePost: () => dispatch({ type: DELETE_POSTS, id: match.params.id }),
  fetchPosts: () => dispatch({ type: REQUEST_POSTS }),
  handleChange: (e) =>
    dispatch({
      type: HANDLE_POST_CHANGE,
      value: e.target.value,
      id: Number(match.params.id),
    }),
  setChanges: (id) => dispatch({ type: UPDATE_POSTS, id }),
  switchVisibility: (value) => dispatch(actions.switchVisibility(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
