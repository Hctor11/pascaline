import { Mafs, Coordinates, Plot, Theme } from "mafs";

interface props{
  resultFunctionPlot: (x:number) => number;
  baseFunctionPlot: (x:number) => number;
}

const DoubleResultPlot = ({resultFunctionPlot, baseFunctionPlot}:props) => {
  return (
    <div className="flex md:w-[70%] rounded-md">
      <Mafs viewBox={{ x: [-5, 5], y: [-5,5]}}   preserveAspectRatio="contain">
        <Coordinates.Cartesian />
        <Plot.OfX y={resultFunctionPlot} color={Theme.pink}/>
        <Plot.OfX y={baseFunctionPlot} color={Theme.indigo} style="dashed"/>
      </Mafs>
    </div>
  );
};

export default DoubleResultPlot;
