import { Mafs, Coordinates, Plot, Theme } from "mafs";

interface props{
  functionPlot: (x:number) => number;
}

const ResultPlot = ({functionPlot}:props) => {
  return (
    <div className="flex md:w-[70%] rounded-md">
      <Mafs viewBox={{ x: [-5, 5], y: [-5,5]}}   preserveAspectRatio="contain">
        <Coordinates.Cartesian />
        <Plot.OfX y={functionPlot} color={Theme.pink}/>
      </Mafs>
    </div>
  );
};

export default ResultPlot;
