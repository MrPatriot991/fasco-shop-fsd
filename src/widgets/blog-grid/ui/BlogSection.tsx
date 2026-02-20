import { ExternalLink } from "lucide-react";
import type { BlogPost } from "@/entities/info";

const TAG_COLORS: Record<string, string> = {
  Product: "bg-violet-100 text-violet-700",
  Engineering: "bg-sky-100 text-sky-700",
  Culture: "bg-emerald-100 text-emerald-700",
  Tutorials: "bg-amber-100 text-amber-700",
};

interface BlogSectionProps {
  posts: BlogPost[];
  onPostClick?: (post: BlogPost) => void;
}

export const BlogSection = ({ posts, onPostClick }: BlogSectionProps) => {
  if (posts.length === 0) {
    return <p className="text-sm text-slate-500">No posts available.</p>;
  }

  return (
    <section aria-label="Blog posts" className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <article
          key={`${post.title}-${post.date}`}
          className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-lg"
          onClick={() => onPostClick?.(post)}
        >
          <div className="h-44 overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <div className="mb-2.5 flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${TAG_COLORS[post.tag] ?? "bg-slate-100 text-slate-600"}`}
              >
                {post.tag}
              </span>
              <time className="text-xs text-slate-400" dateTime={post.date}>
                {post.date}
              </time>
            </div>

            <h3 className="text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-indigo-600">
              {post.title}
            </h3>

            <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-indigo-500">
              Read more
              <ExternalLink size={11} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
