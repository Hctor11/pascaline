import ContentContainer from "@/components/Utilities/ContentContainer"
import Headline from "@/components/Utilities/Headline"
import Paragraph from "@/components/Utilities/Paragraph"

const page = () => {
  return (
    <div>
        <ContentContainer asideMenu={true}>
        <>
          <Headline headline="Parallel function solver"/>
          <Paragraph content="Given a point A(x,y) and a slope, find the parallel function who pass at the given point."/>
        </>
      </ContentContainer>
    </div>
  )
}

export default page