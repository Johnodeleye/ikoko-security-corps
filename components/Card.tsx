const Card = ({ post }: { post: { id: string; title: string; content: string; imageUrl:string; links: string[] } }) => {
    return (
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Image Placeholder (Replace with dynamic image if available) */}
        <img
          alt={post.title}
          src={post.imageUrl || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}
          className="h-56 w-full object-cover"
        />
  
        {/* Content Section */}
        <div className="p-4 sm:p-6">
          <a href={`/posts/${post.id}`}>
            <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-all">
              {post.title}
            </h3>
          </a>
  
          <p className="mt-2 line-clamp-3 text-sm text-gray-500">
            {post.content.slice(0, 120)}...
          </p>
  
          <a
            href={`/posts/${post.id}`}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    );
  };
  
  export default Card;
  