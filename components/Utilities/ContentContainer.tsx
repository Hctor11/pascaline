import AsideMenu from "./AsideMenu";

interface props {
  children: JSX.Element;
  asideMenu: boolean;
}

const ContentContainer = ({ children, asideMenu }: props) => {
  return (
    <div className="max-w-[1400px] flex m-4 lg:w-[75%] lg:m-auto lg:p-6">
      {asideMenu ? <AsideMenu /> : null}

      <div className="w-[80%] mx-4">{children}</div>
    </div>
  );
};

export default ContentContainer;
