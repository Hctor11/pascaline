import SearchBar from "./SearchBar";
import TitleAndSections from "./TitleAndSections";
import Calculator from "./Calculator";
import Categories from "./Categories";

const Grid = () => {
  return (
    <main className="box-border gap-2 mt-3 grid grid-cols-1 p-2 lg:w-[75%] lg:m-auto lg:mt-5">
      <div className="m-auto grid gap-2 lg:grid-cols-[70%,29%] w-full">
        <div className="grid gap-2 grid-cols-1 lg:m-auto">
          <TitleAndSections />
          <Calculator />
        </div>
        <SearchBar />
      </div>
      <Categories/>
    </main>
  );
};

export default Grid;
