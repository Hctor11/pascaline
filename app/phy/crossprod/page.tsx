import ContentContainer from '@/components/Utilities/ContentContainer'
import Headline from '@/components/Utilities/Headline'
import Paragraph from '@/components/Utilities/Paragraph'
import CrossProduct from './CrossProduct'

const page = () => {
  return (
    <>
        <ContentContainer asideMenu={true}>
        <>
          <Headline headline="Cross Product"/>
          <Paragraph content="Cross product vector multiplication"/>
          <CrossProduct/>
        </>
      </ContentContainer>
    </>
  )
}

export default page