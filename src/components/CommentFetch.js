import React, { useEffect, useState } from "react";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("error", error));
  }, [postId]);

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
