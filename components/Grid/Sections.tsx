import Link from "next/link";

const Sections = () => {

  /*
  ESTE ES SOLO UNA MAQUETACION CUANDO TENGA LOS ICONOS REALES USAR UN MAP
  */

  return <div className="grid place-items-center place-content-center grid-cols-3 gap-2 p-2  bg-zinc-500 rounded-md">
    <Link href=''>
      <div className="bg-zinc-700 h-28 rounded-sm aspect-square">
        a
      </div>
    </Link>
    <Link href=''>
      <div className="bg-zinc-700 h-28 rounded-sm aspect-square">
        a
      </div>
    </Link>
    <Link href=''>
      <div className="bg-zinc-700 h-28 rounded-sm aspect-square">
        a
      </div>
    </Link>
    </div>;
};

export default Sections;
