import React from "react";
import useComments from "../hooks/useComments";

function CommentList({ postId }) {
  const comments = useComments(postId);

  return (
    <div>
      <h4>Комментарии:</h4>
      {comments.length === 0 ? (
        <p>Нет комментариев</p>
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
