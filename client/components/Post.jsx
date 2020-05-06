import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const Post = ({ posts }) => {
  const { id } = useParams();

  const { title, content } = posts.filter((post) =>
    post.id === id ? { post } : null
  )[0] || { title: "not found", content: "sorry my friend ❔ " };
  return (
    <div className="container">
      <h1>🐜{title}🐜</h1>
      <section dangerouslySetInnerHTML={{ __html: content }} />
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
  );
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  deletePost: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
