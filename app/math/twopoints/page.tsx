import ContentContainer from "@/components/Utilities/ContentContainer"
import LinearFunctionCalculator from "./LinearFunctionCalculator"

const page = () => {
  return (
    <>
        <ContentContainer asideMenu={true}>
        <>
          <h1 className="font-semibold text-2xl">Linear Function Solver</h1>
          <p className="mb-3">Given two points A and B find all possible data from the linear function.</p>
          <LinearFunctionCalculator/>
        </>
      </ContentContainer>
    </>
  )
}

export default page