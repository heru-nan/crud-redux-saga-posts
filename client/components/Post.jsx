import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const Post = ({ posts, deletePost }) => {
  const { id } = useParams();

  const { title, content } = posts.filter((post) =>
    post.id === id ? { post } : null
  )[0] || { title: "not found", content: "sorry my friend ❔ " };
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <h1>🐜{title}🐜</h1>
        <section dangerouslySetInnerHTML={{ __html: content }} />
        {` `}
        <div className="">
          <Link to="/">
            <button>back</button>
          </Link>
          {`  `}
          <Link to="/">
            <button className="" onClick={() => deletePost(id)}>
              ‼ delete
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(actions.deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
