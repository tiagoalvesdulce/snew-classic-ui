import React from "react";

const CommentAreaTitle = ({ num_comments, commentsTitle, singleThread }) => (
  <div className="panestack-title">
    <span className="title">{commentsTitle || `all ${num_comments} comments`}</span>
    {singleThread ? singleThread : null}
  </div>
);

export default CommentAreaTitle;
