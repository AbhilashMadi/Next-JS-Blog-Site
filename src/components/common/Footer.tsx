import { FC } from "react";
import Container from "@common/Container";
import { siteConfig } from "@utils/siteConfig";
import Link from "next/link";

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
            <div>{siteConfig.socialLinksTxt}</div>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">{siteConfig.currentlyAt}</p>
            <div className="shadow-md bg-white rounded-md px-3 py-2 flex items-center justify-center gap-2">
              <div className="bg-emerald-500 rounded-full w-2 h-2" />
              <p className="font-semibold">{siteConfig.currentPlace}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t text-sm">
          <p className="text-neutral-400">{siteConfig.copyright} {new Date().getFullYear()}</p>
          <p><span>{siteConfig.madeWith}</span>
            <Link href={siteConfig.socialLinks.github} className="underline text-zinc-800 underline-offset-4">@Abhilash</Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;