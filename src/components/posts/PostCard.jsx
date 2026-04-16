const BODY_PREVIEW_LENGTH = 80;

function PostCard({ post, onOpen }) {
  const isLong = post.body.length > BODY_PREVIEW_LENGTH;
  const preview = isLong
    ? post.body.slice(0, BODY_PREVIEW_LENGTH).trimEnd() + "…"
    : post.body;

  return (
    <article className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 border border-gray-100 hover:shadow-lg transition-shadow">
      <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
        Post #{post.id}
      </span>

      <h2 className="text-base font-bold text-gray-800 leading-snug capitalize">
        {post.title}
      </h2>

      <p className="text-sm text-gray-500 leading-relaxed flex-1">{preview}</p>

      {isLong && (
        <button
          onClick={() => onOpen(post)}
          className="self-start text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline underline-offset-2 transition-colors cursor-pointer"
        >
          Leer más →
        </button>
      )}
    </article>
  );
}

export default PostCard;
