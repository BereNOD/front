import React from 'react';

const Post = ({
  body,
  title
}) => (
  <article className="Post">
    <h2 className="Post__title">{title}</h2>
    <p className="Post__body">{body}</p>
  </article>
);

export default Post;
