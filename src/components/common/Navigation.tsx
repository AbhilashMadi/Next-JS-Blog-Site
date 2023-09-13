import { FC } from "react";
import Container from "@common/Container";
import Link from "next/link";
import { HOME, CITIES, EXPERIENCES } from "@routes/paths";
import { headers } from "@utils/labels";

const Navigation: FC = () => {
  return (
    <header className="border-b bg-white sticky top-0 left-0 
      right-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50">
      <Container className="py-5 flex items-center justify-between">
        <Link href={HOME} className="text-lg font-serif">
          {headers.explorer}
        </Link>
        <nav>
          <ul className="flex justify-between gap-4">
            <li>
              <Link href={CITIES}>{headers.cities}</Link>
            </li>
            <li>
              <Link href={EXPERIENCES}>{headers.expreiences}</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navigation;