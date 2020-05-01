import React from "react";
import { useParams, Link } from "react-router-dom";

const Post = ({ posts, handleDeletePost }) => {
  const { id } = useParams();
  const { title, content } = posts.filter((post) =>
    post.id === id ? { post } : null
  )[0];
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
          <button className="red" onClick={() => handleDeletePost(id)}>
            ‼ delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
