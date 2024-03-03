import Image from "next/image";
import Link from "next/link";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  return (
    <nav className=" md:px-5 py-3 px-3 w-full shadow-sm bg-white flex items-center justify-between">
      <div className="cursor-pointer">
        <Link href="/">
          <Image src="/NewLogo.svg" alt="" width={100} height={100} />
        </Link>
      </div>
      <NavigationLinks/>
    </nav>
  );
};

export default Navigation;
