import ContentContainer from "@/components/Utilities/ContentContainer"
import PerpendicularFunctionCalculator from "./PerpendicularFunctionCalculator"
import Headline from "@/components/Utilities/Headline"
import Paragraph from "@/components/Utilities/Paragraph"

const page = () => {
  return (
    <div>
      <ContentContainer asideMenu={true}>
        <>
        <Headline headline="Perpendicular Function Solver"/>
          <Paragraph content={`Given a point A(x,y) and a slope, find the perpendicular function who pass at the given point.`}/>
          <PerpendicularFunctionCalculator/>
        </>
      </ContentContainer>
    </div>
  )
}

export default page