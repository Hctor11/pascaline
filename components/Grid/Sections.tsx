import Link from "next/link";
import Image from "next/image";

const Sections = () => {
  /*
  ESTE ES SOLO UNA MAQUETACION CUANDO TENGA LOS ICONOS REALES USAR UN MAP
  */

  return (
    <div className="grid place-items-center md:w-[80%] lg:w-[40%] place-content-center grid-cols-3 gap-2 lg:gap-x-5 p-2 border rounded-xl text-sm">
      <div className="flex flex-col items-center">
        <Link href="/math">
          <div className="bg-zinc-900 h-28 flex items-center justify-center md:h-20 lg:h-16 rounded-md hover:bg-zinc-800 aspect-square">
            <Image
              src="/categoryIcons/math.svg"
              alt="math icon"
              width={50}
              height={50}
            />
          </div>
        </Link>
        <p>Math</p>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/phy">
          <div className="bg-zinc-900 h-28 flex items-center justify-center md:h-20 lg:h-16 rounded-md hover:bg-zinc-800 aspect-square">
            <Image
              src="/categoryIcons/physics.svg"
              alt="math icon"
              width={50}
              height={50}
            />
          </div>
        </Link>
        <p>Physics</p>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/stats">
          <div className="bg-zinc-900 h-28 flex items-center justify-center md:h-20 lg:h-16 rounded-md hover:bg-zinc-800 aspect-square">
            <Image
              src="/categoryIcons/statistics.svg"
              alt="math icon"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <p>Statistics</p>
      </div>
    </div>
  );
};

export default Sections;
