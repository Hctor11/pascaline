import SearchBar from "./SearchBar";
import TitleAndSections from "./TitleAndSections";
import Categories from "./Categories";
import Calculator from "./Calculator/Calculator";

const Grid = () => {
  return (
    <main className="h-full box-border max-w-[1420px] gap-y-2 my-2 grid grid-cols-1 p-2 lg:w-[80%] lg:m-auto lg:mt-3">
      <div className="m-auto gap-x-2 grid lg:grid-cols-[69%,30%] xl:lg:grid-cols-[59%,40%]  w-full">
        <div className="grid h-full gap-y-2 grid-cols-1 lg:m-auto">
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
