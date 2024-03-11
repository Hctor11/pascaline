import Title from "./Title"
import Sections from "./Sections"

const TitleAndSections = () => {
  return (
    <div className="flex flex-col gap-2">
      <Title/>
      <Sections/>
    </div>
  )
}

export default TitleAndSections