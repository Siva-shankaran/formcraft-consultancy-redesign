function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto mt-5 px-8">

        <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-full px-8 py-4 flex justify-between items-center">

          <h1 className="text-white text-3xl font-bold tracking-wide">
            FORMCRAFT
          </h1>

          <ul className="flex gap-10 text-white font-medium">

            <li className="cursor-pointer hover:text-orange-400 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-orange-400 transition">
              Services
            </li>

            <li className="cursor-pointer hover:text-orange-400 transition">
              Projects
            </li>

            <li className="cursor-pointer hover:text-orange-400 transition">
              Contact
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;