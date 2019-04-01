import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.data.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.data.author}
        </a>
        <div className="metadata">
          <span className="date">{props.data.timeAgo}</span>
        </div>
        <div className="text">{props.data.commentText}</div>
      </div>
    </div>
  );
};

// TO make this Component available
export default CommentDetail;
