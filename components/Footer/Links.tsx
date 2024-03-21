import footerLinks from "./FooterLinks";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <>
      <div className="flex-col md:flex-row flex mx-3 lg:mx-0">
        {footerLinks.map((category) => (
          <>
            <div className="mr-12 mb-8">
              <Link href={category.headlink}>
                <h3 className="text-md font-semibold hover:underline">
                  {category.head}
                </h3>
              </Link>
              <div className="">
                {category.sublinks?.map((sublink) => (
                  <>
                    <Link
                      className="list-none text-sm text-zinc-500 hover:underline"
                      href={sublink.link}
                    >
                      <li>{sublink.title}</li>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FooterLinks;
