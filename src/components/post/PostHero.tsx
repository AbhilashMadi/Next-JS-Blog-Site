import { FC } from "react";
import Image from "next/image";

import { Post } from "@temp/temp.types";
import PostContent from "./PostContent";
'@post/PostCard';
import SocialLinks from "@atoms/SocialLinks";
import { generateSocialShareUrls } from "@lib/helpers";


interface IPostHero {
  post: Post;
}
const PostHero: FC<IPostHero> = (props) => {
  const { post } = props;
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  console.log(pageUrl);

  return (
    <>
      <PostContent post={post} isPostPage />
      <Image src={post.image}
        width={1280}
        height={500}
        alt={post.title}
        className="rounded-md object-cover object-center mt-6 h-[300px] md:h-[500px]"
      />
      <section className="mt-10 flex gap-10">
        <div className="relative">
          <div className="sticky top-20">
            <SocialLinks
              socialLinks={generateSocialShareUrls(post, pageUrl)}
              isShareUrl />
          </div>
        </div>
        <article className="bg-slate-200 w-full">
          <p>body</p>
        </article>
      </section>
    </>
  )
}

export default PostHero