import { useState } from "react";
import usePosts from "@/hooks/usePosts";
import PostCard from "@/components/posts/PostCard";
import PostModal from "@/components/posts/PostModal";

function PostList() {
  const { visiblePosts, hasMore, loading, error, loadMore } = usePosts();
  const [selectedPost, setSelectedPost] = useState(null);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10 font-medium">{error}</p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {visiblePosts.map((post) => (
          <PostCard key={post.id} post={post} onOpen={setSelectedPost} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold px-8 py-3 rounded-xl transition-all cursor-pointer"
          >
            Cargar 10 más
          </button>
        </div>
      )}

      {!hasMore && visiblePosts.length > 0 && (
        <p className="text-center text-gray-400 text-sm mt-8">
          ¡Eso es todo! Mostrando los {visiblePosts.length} posts disponibles.
        </p>
      )}

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
}

export default PostList;
