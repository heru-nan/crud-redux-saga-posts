import React from "react";
import { Link } from "react-router-dom";
import HiddenForm from "./utils";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const Posts = ({
  posts,
  visibility,
  switchVisibility,
  counter,
  incrementAsync,
}) => {
  return (
    <section className="hero is-primary is-fullheight">
      <header className="hero-head">
        <div className="container has-text-centered">
          <h1 className="title has" style={{ marginTop: "10px" }}>
            hello, world for posts 👨🏽‍💻
          </h1>
        </div>
      </header>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <ul className="list">
                {posts.map((post) => (
                  <li className="list-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title} 📂 </Link>
                  </li>
                ))}
              </ul>
              <button
                className="button is-primary is-large"
                onClick={switchVisibility}
              >
                More Posts
              </button>
              {visibility && <HiddenForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    visibility: state.utils.visibility,
    counter: state.utils.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchVisibility: () => dispatch(actions.switchVisibility()),
    incrementAsync: () => dispatch({ type: `INCREMENT_ASYNC` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
