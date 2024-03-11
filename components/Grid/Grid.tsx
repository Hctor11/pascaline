import SearchBar from "./SearchBar"
import TitleAndSections from "./TitleAndSections"

const Grid = () => {
  return (
    <main className="container gap-2 grid grid-cols-1 p-2">
        <SearchBar/>
        <TitleAndSections/>
    </main>
  )
}

export default Grid