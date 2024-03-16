import { Mafs, Coordinates } from "mafs";

const Plot = () => {
  return (
    <div className="rounded-md container">
      <Mafs viewBox={{ x: [-5, 5], y: [-5,5]}}>
        <Coordinates.Cartesian />
      </Mafs>
    </div>
  );
};

export default Plot;
