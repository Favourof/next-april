import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { title: "Home", route: "/" },
    { title: "about", route: "about" },
    { title: "contact", route: "contact" },
    { title: "Dashboard", route: "dashboard" },
    { title: "Product", route: "product" },
  ];
  return (
    <div>
      <ul className="flex w-[50%] m-auto justify-between p-4 border border-amber-50 rounded-full mt-5">
        {links.map((link, i) => (
          <Link
            href={link.route}
            className="hover:bg-white text-amber-300 hover:text-black p-2 rounded-full cursor-pointer "
            key={i}
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
