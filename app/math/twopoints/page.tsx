import ContentContainer from "@/components/Utilities/ContentContainer"
import LinearFunctionCalculator from "./LinearFunctionCalculator"
import Paragraph from "@/components/Utilities/Paragraph"
import Headline from "@/components/Utilities/Headline"

const page = () => {
  return (
    <>
        <ContentContainer asideMenu={true}>
        <>
          <Headline headline="Linear Function Solver"/>
          <Paragraph content="Given two points A and B find all possible data from the linear function."/>
          <LinearFunctionCalculator/>
        </>
      </ContentContainer>
    </>
  )
}

export default page