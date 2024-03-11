import SearchBar from "./SearchBar"
import TitleAndSections from "./TitleAndSections"
import Calculator from "./Calculator"
import Categories from "./Categories"

const Grid = () => {
  return (
    <main className="gap-2 grid grid-cols-1 p-2">
        <SearchBar/>
        <TitleAndSections/>
        <Calculator/>
        <Categories/>
    </main>
  )
}

export default Grid