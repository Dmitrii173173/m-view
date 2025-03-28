import { useState, useEffect } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("Ошибка загрузки постов", error));
  }, []);

  return posts;
}

export default usePosts;
