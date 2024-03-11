import Link from "next/link";

const Sections = () => {

  /*
  ESTE ES SOLO UNA MAQUETACION CUANDO TENGA LOS ICONOS REALES USAR UN MAP
  */

  return <div className="grid grid-cols-3 gap-2 p-2 bg-zinc-500 rounded-md">
    <Link href=''>
      <div className="bg-zinc-700 h-20">
        a
      </div>
    </Link>
    <Link href=''>
      <div className="bg-zinc-700 h-20">
        a
      </div>
    </Link>
    <Link href=''>
      <div className="bg-zinc-700 h-20">
        a
      </div>
    </Link>
    </div>;
};

export default Sections;
