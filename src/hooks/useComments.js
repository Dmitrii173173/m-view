import { useState, useEffect } from "react";
import { COMMENTS_API } from "../constants";

function useComments(postId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!postId) return;

    fetch(COMMENTS_API)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Ошибка загрузки комментариев", error));
  }, [postId]);

  return comments;
}

export default useComments;
