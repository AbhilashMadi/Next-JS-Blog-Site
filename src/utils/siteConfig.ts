
type SiteConfig = {
  siteName: string;
  description: string;
  currentlyAt: string;
  exploreTag: string;
  socialLinksTxt: string;
  currentPlace: string;
  copyright: string;
  madeWith: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
};

export const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and cities around the world!",
  currentlyAt: "Currently At",
  currentPlace: "South Korea",
  exploreTag: "#exploretheworld",
  socialLinksTxt: "Social Links",
  copyright: "All rights are reserved | Copyright",
  madeWith: "Made with 💓 By", 
  socialLinks: {
    twitter: "#",
    youtube: "#",
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
};
