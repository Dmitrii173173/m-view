import React, { useState } from "react";
import CommentList from "./CommentFetch";
import { SHOW_COMMENTS, HIDE_COMMENTS } from "../constants";

function Post({ post }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? HIDE_COMMENTS : SHOW_COMMENTS}
      </button>
      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default Post;
