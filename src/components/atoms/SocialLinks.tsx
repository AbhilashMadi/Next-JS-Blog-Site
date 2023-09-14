import { FC, ReactNode } from "react";
import { TwitterIcon, FacebookIcon, LinkedinIcon, GithubIcon, YoutubeIcon } from "lucide-react";
import { siteConfig } from "@utils/siteConfig";
import Link from "next/link";

type LinkObj = {
  icon: ReactNode;
  href: string;
}

const SocialLinks: FC = () => {
  const { socialLinks } = siteConfig;
  const links: LinkObj[] = [
    {
      icon: <TwitterIcon
        size={18}
        className="hover:text-cyan-400 cursor-pointer hover:scale-105" />,
      href: socialLinks.twitter,
    }, {
      icon: <FacebookIcon
        size={18}
        className="hover:text-blue-500 cursor-pointer hover:scale-105" />,
      href: socialLinks.facebook,
    },
    {
      icon: <LinkedinIcon
        size={18}
        className="hover:text-cyan-700 cursor-pointer hover:scale-105" />,
      href: socialLinks.linkedin,
    },
    {
      icon: <GithubIcon
        size={18}
        className="hover:text-neutral-700 cursor-pointer hover:scale-105" />,
      href: socialLinks.github,
    },
    {
      icon: <YoutubeIcon
        size={18}
        className="hover:text-red-500 cursor-pointer hover:scale-105" />,
      href: socialLinks.youtube,
    }
  ];

  return (
    <div className="flex gap-2 items-center py-2 text-neutral-500">
      {links.map((obj: LinkObj, _i: number) => {
        return <Link href={obj.href} key={_i}>{obj.icon}</Link>
      })}
    </div>
  )
}

export default SocialLinks;