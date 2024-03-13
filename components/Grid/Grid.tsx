import SearchBar from "./SearchBar";
import TitleAndSections from "./TitleAndSections";
import Calculator from "./Calculator";
import Categories from "./Categories";

const Grid = () => {
  return (
    <main className="box-border max-w-[1400px] gap-y-2 mt-3 grid grid-cols-1 p-2 lg:w-[75%] lg:m-auto lg:mt-5">
      <div className="m-auto overflow-clip gap-x-2 grid lg:grid-cols-[69%,30%] w-full">
        <div className="grid gap-y-2 grid-cols-1 lg:m-auto">
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
