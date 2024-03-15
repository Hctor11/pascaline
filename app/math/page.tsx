import CategoryIterator from "@/components/Utilities/CategoryIterator"
import ContentContainer from "@/components/Utilities/ContentContainer"

const page = () => {
  return (
    <>
      <ContentContainer asideMenu={false}>
        <>
        <h1 className="font-semibold text-2xl">All Math Calculators</h1>
      <CategoryIterator category="Math"/>
        </>
      </ContentContainer>
    </>
  )
}

export default page