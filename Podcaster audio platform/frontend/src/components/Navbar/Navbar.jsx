import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "All Podcasts",
      path: "/all-podcasts",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];
  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2 relative">
      <div className="flex items-center justify-between">
        <div className="logo brand-name w-2/6 flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9043/9043096.png"
            alt="Podcaster logo"
            className="h-12"
          />
          <Link to="/" className="text-2xl font-bold">
            Podcaster
          </Link>
        </div>
        <div className="hidden w-2/6 lg:flex items-center justify-center">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="ms-4 hover:font-semibold transition-all duration-300"
            >
              {items.name}
            </Link>
          ))}
        </div>
        <div className="hidden w-2/6 lg:flex items-center justify-end">
          <Link className="px-6 py-3 border border-black rounded-full">
            Login
          </Link>
          <Link className="ms-4 px-6 py-3 bg-black text-white rounded-full">
            Signup
          </Link>
        </div>
        <div className="w-4/6 flex items-center justify-end lg:hidden">
          <button className="text-4xl">
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-blue-100">
        <div className="p-8 flex items-center justify-end text-4lx">
          <button>
            <RxCross2 />
          </button>
        </div>
        <div className="h-full flex flex-col items-center justify-center">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
            >
              {items.name}
            </Link>
          ))}
          <Link
            to={"/login"}
            className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;