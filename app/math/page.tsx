import links from "@/components/Navigation/Links"
import { SubLinks } from './../../components/Navigation/LinksTypes';

const page = () => {
  return (
    <div>
        {
          links.map(link => (
            <>
              {link.name === 'Math' 
                ? link.sublink.map((sublinks) => (
                  <>
                    <div className="">
                      {sublinks.mySubLinks.map((sublinks) => (
                        <>
                          <div className="">
                            {sublinks.name}
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ))
                : ''
              }
            </>
          ))
        }
    </div>
  )
}

export default page