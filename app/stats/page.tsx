import CategoryIterator from "@/components/Utilities/CategoryIterator";
import ContentContainer from "@/components/Utilities/ContentContainer";

const page = () => {
  return (
    <>
      <ContentContainer asideMenu={true}>
        <>
          <h1 className="font-semibold text-2xl">All Physics Calculators</h1>
          <CategoryIterator category="Statistics" />
        </>
      </ContentContainer>
    </>
  );
};

export default page;
