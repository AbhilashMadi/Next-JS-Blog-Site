import { FC } from "react";
import Image from "next/image";

import NewsletterForm from "@atoms/NewsletterForm";

const CTACard: FC = () => {

  return (
    <div className="overflow-hidden rounded-md px-6 py-10 bg-slate-100 relative">
      {/* Container Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30 z-10" />
      {/* Background Image */}
      <Image
        fill
        src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw2fHxOZXclMjBZb3J8ZW58MHx8fHwxNjcwMjUzMzMw&ixlib=rb-4.0.3"
        alt="CTA Card background image"
        className="object-cover object-center"
      />
      {/* Card Content */}
      <div className="relative z-20">
        <p className="text-lg font-medium">#exploretheworld</p>
        <h3 className="mt-3 text-4xl font-semibold">Explore the world with me!</h3>
        <p className="max-w-lg mt-2 text-lg">CTA Card Image
          #exploretheworld
          Explore the world with me!
          Explore the world with me! I&rsquo;m travelling around the 🌍. I&rsquo;ve visited most of the great cities of 🇺🇸 and currently I&rsquo;m travelling in India Join me!</p>
      <NewsletterForm />
      </div>
    </div>
  )
}

export default CTACard;