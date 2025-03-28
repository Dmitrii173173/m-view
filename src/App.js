import React from "react";
import PostList from "./components/PostList";
import usePosts from "./hooks/usePosts";

function App() {
  const posts = usePosts();

  return (
    <div>
      <h1>Сообщения</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
