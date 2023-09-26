
export type SiteConfig = {
  siteName: string;
  description: string;
  currentlyAt: string;
  exploreTag: string;
  currentPlace: string;
  copyright: string;
  madeWith: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    copy: string;
  };
};

export const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and cities around the world!",
  currentlyAt: "Currently At",
  currentPlace: "South Korea",
  exploreTag: "#exploretheworld",
  copyright: "All rights are reserved | Copyright",
  madeWith: "Made By",
  socialLinks: {
    twitter: "#",
    youtube: "#",
    github: "#",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    copy: "#",
  },
};
