
import readingTime from "reading-time";
import { DateTime } from "luxon";
import { Post } from "@temp/temp.types";

export const getReadingTime = (text: string) => {
  return readingTime(text).text;
}

export const getRelativeDate = (date: string) => {
  return DateTime.fromISO(date).toRelative();
}

export const generateSocialShareUrls = (post: Post, pageUrl: string) => {
  const encodedUrl: string = encodeURIComponent(pageUrl);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(post.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    instagram: `https://www.instagram.com/share?url=${encodedUrl}`,
    youtube: `https://www.youtube.com/share?url=${encodedUrl}&title=${encodeURIComponent(post.title)}`,
    github: `https://github.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodeURIComponent(post.title)}`,
    copy: pageUrl,
  };
};