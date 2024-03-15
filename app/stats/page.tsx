import CategoryIterator from "@/components/Utilities/CategoryIterator";
import ContentContainer from "@/components/Utilities/ContentContainer";

const page = () => {
  return (
    <>
      <ContentContainer asideMenu={false}>
        <CategoryIterator category="Statistics" />
      </ContentContainer>
    </>
  );
};

export default page;
