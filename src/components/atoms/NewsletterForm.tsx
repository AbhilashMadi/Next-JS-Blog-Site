import { FC } from "react";

const NewsletterForm: FC = () => {
  return (
    <form className="mt-6 flex gap-2 items-center">
      <input type="text" placeholder="Enter your email" className="px-3 py-2 text-base rounded-md outline-none placeholder:text-sm focus:ring-2 ring-neutral-600 bg-white/80" />
      <button className="px-3 py-2 bg-neutral-900 text-neutral-200 rounded-md"
      >Subscribe</button>
    </form>
  )
}

export default NewsletterForm