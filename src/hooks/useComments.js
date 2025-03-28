import { useState, useEffect } from "react";

function useComments(postId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!postId) return;

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Ошибка загрузки комментариев", error));
  }, [postId]);

  return comments;
}

export default useComments;
