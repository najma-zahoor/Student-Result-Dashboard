import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm px-8 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-800">
        Student Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Home
        </Link>

        <Link
          to="/result"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Results
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;