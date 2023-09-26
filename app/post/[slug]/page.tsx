import { FC } from "react";
import { notFound } from "next/navigation";

import { DUMMY_POSTS } from "@temp/collections";
import { Post } from "@temp/temp.types";
import Container from "@common/Container";
import PostHero from "@post/PostHero";
import PostBody from "@post/PostBody";
import SocialLinks from "@atoms/SocialLinks";
import { generateSocialShareUrls } from "@lib/helpers";
import CTACard from "@atoms/CTACard";
import { labels } from "@utils/labels"

const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post: Post) => {
    return {
      slug: post.slug,
    }
  })
}

interface IPostPage {
  params: { slug: string };
}

const PostPage: FC<IPostPage> = (props) => {
  const { params: { slug } } = props;
  const post = DUMMY_POSTS.find((post: Post) => post.slug === slug);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  if (!post) {
    notFound();
  }

  return (
    <Container className="space-y-10">
      <PostHero post={post} />
      <section className="flex gap-10 flex-col md:flex-row">
        <div className="relative">
          <div className="sticky top-20 flex flex-col gap-2">
            <p className=" md:hidden font-bold">{labels.shareThisContent}</p>
            <SocialLinks
              socialLinks={generateSocialShareUrls(post, pageUrl)}
              isShareUrl />
          </div>
        </div>
        <PostBody body={post.body} />
      </section>
      <CTACard />
    </Container>
  )
}

export default PostPage;