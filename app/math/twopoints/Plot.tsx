import { Mafs, Coordinates } from "mafs";

const Plot = () => {
  return (
    <div className="flex w-[60%] rounded-md">
      <Mafs viewBox={{ x: [-5, 5], y: [-5,5]}}   preserveAspectRatio="contain">
        <Coordinates.Cartesian />
      </Mafs>
    </div>
  );
};

export default Plot;
