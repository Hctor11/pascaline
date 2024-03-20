import ContentContainer from "@/components/Utilities/ContentContainer"
import PerpendicularFunctionCalculator from "./PerpendicularFunctionCalculator"

const page = () => {
  return (
    <div>
      <ContentContainer asideMenu={true}>
        <>
          <PerpendicularFunctionCalculator/>
        </>
      </ContentContainer>
    </div>
  )
}

export default page