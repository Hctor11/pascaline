import Link from "next/link"
import footerLinks from "../Footer/FooterLinks"

const AsideMenu = () => {
  return (
    <aside> 
        <div className="hidden flex-col border rounded-md p-2 md:flex mx-3 lg:mx-0">
        {footerLinks.map((category) => (
          <>
            <div className="mr-6 mb-8 last:mb-0">
              <Link href={category.headlink}>
                <h1 className="text-md font-semibold hover:underline">
                  {category.head}
                </h1>
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
    </aside>
  )
}

export default AsideMenu