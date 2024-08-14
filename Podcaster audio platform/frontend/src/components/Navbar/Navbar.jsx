import { Link } from "react-router-dom";

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
  ];
  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2">
      <div className="flex items-center justify-between">
        <div className="logo brand-name w-2/6">
          <Link to="/" className="text-2xl font-bold">
            Podcaster
          </Link>
        </div>
        <div className="w-2/6">
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
        <div className="w-2/6"></div>
      </div>
    </nav>
  );
};

export default Navbar;
