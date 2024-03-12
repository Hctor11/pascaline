import SearchBar from "./SearchBar"
import TitleAndSections from "./TitleAndSections"
import Calculator from "./Calculator"
import Categories from "./Categories"

const Grid = () => {
  return (
    <main className="gap-2 mt-3 grid grid-cols-1 p-2 lg:w-[70%] lg:m-auto lg:mt-5">
        <SearchBar/>
        <TitleAndSections/>
        <Calculator/>
        <Categories/>
    </main>
  )
}

export default Grid