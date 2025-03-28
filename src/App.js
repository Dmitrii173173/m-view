import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("error", error));
  }, []);

  return (
    <div>
      <h1>Сообщения</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
