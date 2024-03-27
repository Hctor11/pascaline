import ContentContainer from '@/components/Utilities/ContentContainer'
import Headline from '@/components/Utilities/Headline'
import Paragraph from '@/components/Utilities/Paragraph'

const page = () => {
  return (
    <>
        <ContentContainer asideMenu={true}>
        <>
          <Headline headline="Unit Converter"/>
          <Paragraph content="Convert A unit to B unit."/>
        </>
      </ContentContainer>
    </>
  )
}

export default page