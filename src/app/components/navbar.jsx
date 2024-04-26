import Link from "next/link"


const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between">
        {/*logo here */}
        <div className="">
          <Link href="/"><span className="text-3xl text-indigo-600 font-bold">Azad</span></Link>
        </div>

        {/*responsive menu here */}
        <div className="">
          {/* menu button */}
          <button className="w-10 h-8 flex flex-col justify-between">
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
          </button>
        </div>
    </div>
  )
}

export default Navbar