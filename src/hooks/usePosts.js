import { useState, useEffect, useCallback } from "react";
import { apiPostList } from "@/api/apiAxios";

const PAGE_SIZE = 10;

function usePosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiPostList()
      .then((data) => setAllPosts(data ?? []))
      .catch(() => setError("No se pudieron cargar los posts."))
      .finally(() => setLoading(false));
  }, []);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  }, []);

  const visiblePosts = allPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allPosts.length;

  return { visiblePosts, hasMore, loading, error, loadMore };
}

export default usePosts;
