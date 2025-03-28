import React from "react";
import useComments from "../hooks/useComments";
import { COMMENTS_TITLE, NO_COMMENTS } from "../constants";

function CommentList({ postId }) {
  const comments = useComments(postId);

  return (
    <div>
      <h4>{COMMENTS_TITLE}</h4>
      {comments.length === 0 ? (
        <p>{NO_COMMENTS}</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id}>
            <strong>{comment.name}</strong> ({comment.email}):<br />
            {comment.body}
          </div>
        ))
      )}
    </div>
  );
}

export default CommentList;
