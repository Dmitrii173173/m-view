import React, { useState } from "react";
import CommentList from "./CommentFetch";

function Post({ post }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Скрыть комментарии" : "Показать комментарии"}
      </button>
      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default Post;
