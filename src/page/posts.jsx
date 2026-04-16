import PostList from "@/components/posts/PostList";

function PostsPage() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Artículos traídos desde JSONPlaceholder. Hacé clic en "Leer más" para
          ver el contenido completo.
        </p>
      </div>

      <PostList />
    </section>
  );
}

export default PostsPage;
