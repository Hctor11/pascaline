interface props {
  category: string;
}

import links from "../Navigation/Links";

const CategoryIterator = ({ category }: props) => {
  return (
    <div>
      {links.map((link) => (
        <>
          {link.name === category
            ? link.sublink.map((sublinks) => (
                <>
                  <div className="">
                    {sublinks.mySubLinks.map((sublinks) => (
                      <>
                        <div className="">{sublinks.name}</div>
                      </>
                    ))}
                  </div>
                </>
              ))
            : ""}
        </>
      ))}
    </div>
  );
};

export default CategoryIterator;
