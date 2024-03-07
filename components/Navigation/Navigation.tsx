import Image from "next/image";
import Link from "next/link";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  return (
    <nav className="md:px-5 py-3 px-3 w-full shadow-sm bg-white flex items-center justify-between">
      <div className="cursor-pointer z-10">
        <Link href="/">
          <Image src="/NewLogo.svg" alt="" width={100} height={100} />
        </Link>
      </div>

      <ul className="md:flex hidden gap-5">
        <NavigationLinks/>
      </ul>

      <ul className="md:hidden gap-5 bg-white absolute w-full h-full bottom-0 pt-24">
        <NavigationLinks/>
      </ul>
    </nav>
  );
};

export default Navigation;
