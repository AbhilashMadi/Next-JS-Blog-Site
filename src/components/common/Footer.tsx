import { FC } from "react";
import Link from "next/link";

import Container from "@common/Container";
import { siteConfig } from "@utils/siteConfig";
import SocialLinks from "@atoms/SocialLinks";

const Footer: FC = () => {
  return (
    <footer className="py-8 border-t mt-10">
      <Container>
        <div>
          <h2 className='text-3xl font-bold leading-relaxed font-serif'>{siteConfig.siteName}</h2>
          <p className="max-w-md text-md text-neutral-700">{siteConfig.description}</p>
        </div>

        <div className="mt-6 flex justify-between flex-wrap gap-4">
          <div>
            <p className="font-medium">{siteConfig.exploreTag}</p>
            <SocialLinks socialLinks={siteConfig.socialLinks}/>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">{siteConfig.currentlyAt}</p>
            <div className="shadow-md bg-white rounded-md px-3 py-2 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="font-semibold font-hand text-lg">{siteConfig.currentPlace}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t text-sm">
          <p className="text-neutral-400">{siteConfig.copyright} &copy;{new Date().getFullYear()}</p>
          <p><span>{siteConfig.madeWith} </span>
            <Link href={siteConfig.socialLinks.github} className="underline text-zinc-800 underline-offset-4 hover:text-red-500">@Abhilash</Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;