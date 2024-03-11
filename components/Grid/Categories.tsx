import Link from "next/link"

const Categories = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Link href=''>
      <div className="bg-zinc-500 rounded-xl h-24 p-2">
        <h1>Cat 1</h1>
      </div>
      </Link>
      
      <Link href=''>
      <div className="bg-zinc-500 rounded-xl h-24 p-2">
        <h1>Cat 2</h1>
      </div>
      </Link>

      <Link href=''>
      <div className="bg-zinc-500 rounded-xl h-24 p-2">
        <h1>Cat 3</h1>
      </div>
      </Link>
    </div>
  )
}

export default Categories