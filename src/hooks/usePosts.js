import { useState, useEffect } from "react";
import { POSTS_API } from "../constants";

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(POSTS_API)
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("Ошибка загрузки постов", error));
  }, []);

  return posts;
}

export default usePosts;
