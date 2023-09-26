import { FC } from "react";
import { ArrowRight } from "lucide-react";

import { Post } from "@temp/temp.types";
import { getDynamicClass } from "@utils/dynamicClasses";
import { buttons } from "@utils/labels";
import { getReadingTime, getRelativeDate } from "@lib/helpers";

interface IPostContent {
  post: Post;
  isPostPage?: boolean;
}

const categoryColorClasses = [
  {
    searchString: "Cities",
    class: "text-emerald-600",
  },
  {
    searchString: "Experiences",
    class: "text-indigo-600",
  },
];

const Dot = () => {
  return <span className="w-2 h-2 bg-neutral-200 rounded-full"></span>
}

const PostContent: FC<IPostContent> = (props) => {
  const { post, isPostPage = false } = props;

  return (
    <div className="space-y-2">
      <p className={`flex items-center gap-2 whitespace-nowrap text-neutral-400
      ${isPostPage
          ? "text-sm"
          : "text-xs @md:text-sm"}`}>
        <span
          className={`${getDynamicClass(categoryColorClasses, post.category.title)}`}>{post.category.title}
        </span>
        <Dot />
        <span>
          {`${post.author.first_name} ${post.author.last_name}`}
        </span>
        <Dot />
        <span>
          {getReadingTime(post.body)}
        </span>
        <Dot />
        <span>
          {getRelativeDate(post.date_created)}
        </span>
      </p>

      <div className="space-y-2">
        <h1 className={`font-bold text-neutral-700 ${isPostPage
          ? "text-2xl md:text-3xl lg:text-4xl"
          : "@lg:text-3xl @md:text-2xl text-xl"
          }`}>{post.title}</h1>
        <h3 className="leading-snug text-neutral-800 text-sm @lg:text-lg">{post.description}</h3>
      </div>

      {!isPostPage && <button className="flex items-center gap-2 pt-3">{buttons.readMore} <ArrowRight size={14} className="-rotate-45" />
      </button>}
    </div>
  )
}

export default PostContent;