import CategoryIterator from "@/components/Utilities/CategoryIterator";
import ContentContainer from "@/components/Utilities/ContentContainer";

const page = () => {
  return (
    <>
      <ContentContainer asideMenu={false}>
        <CategoryIterator category="Physics" />
      </ContentContainer>
    </>
  );
};

export default page;
