'use client'

import { FC, ReactNode } from "react";
import { TwitterIcon, FacebookIcon, LinkedinIcon, GithubIcon, YoutubeIcon, Copy, Instagram } from "lucide-react";
import { SiteConfig } from "@utils/siteConfig";
import Link from "next/link";

type LinkObj = {
  icon: ReactNode;
  href: string;
}

interface ISocialLinks {
  socialLinks: SiteConfig["socialLinks"];
  isShareUrl?: boolean;
}

const SocialLinks: FC<ISocialLinks> = (props) => {
  const { socialLinks, isShareUrl = false } = props;

  const links: LinkObj[] = [
    {
      icon: <TwitterIcon
        size={18}
        className="hover:text-cyan-400 cursor-pointer hover:scale-105" />,
      href: socialLinks.twitter,
    },
    {
      icon: <FacebookIcon
        size={18}
        className="hover:text-blue-500 cursor-pointer hover:scale-105" />,
      href: socialLinks.facebook,
    },
    {
      icon: <Instagram
        size={18}
        className="hover:text-pink-500 cursor-pointer hover:scale-105" />,
      href: socialLinks.instagram,
    },
    {
      icon: <LinkedinIcon
        size={18}
        className="hover:text-cyan-700 cursor-pointer hover:scale-105" />,
      href: socialLinks.linkedin,
    },
    ...(isShareUrl
      ? [{
        icon: <Copy
          size={18}
          className="hover:text-green-700 cursor-pointer hover:scale-105"
          onClick={() => navigator.clipboard.writeText(window.location.href)} />,
        href: "#",
      }]
      : [
        {
          icon: <GithubIcon
            size={18}
            className="hover:text-neutral-700 cursor-pointer hover:scale-105" />,
          href: socialLinks?.github,
        },
        {
          icon: <YoutubeIcon
            size={18}
            className="hover:text-red-500 cursor-pointer hover:scale-105" />,
          href: socialLinks?.youtube,
        }
      ])
  ];

  return (
    <div className="flex gap-2 items-center py-2 text-neutral-500">
      {links.map((obj: LinkObj, _i: number) => {
        return <Link href={obj.href} key={_i}>
          {obj.icon}
        </Link>
      })}
    </div>
  )
}

export default SocialLinks;