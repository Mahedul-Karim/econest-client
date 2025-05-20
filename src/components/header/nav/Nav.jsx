import { useStore } from "@/store/Provider";
import SheetCloseWrapper from "@/components/common/SheetCloseWrapper";
import React from "react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS } from "@/lib/data";



const Nav = ({ closeOnClick = false }) => {
  const { user } = useStore();

  const filteredLinks = NAV_LINKS?.filter((link) => !link.isPrivate || !!user);

  const location = useLocation();

  const path = location?.pathname;

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
        {filteredLinks.map((nav) => (
          <li key={nav.to} className={`w-full lg:w-auto`}>
            <SheetCloseWrapper closeOnClick={closeOnClick}>
              <Link
                to={nav.to}
                className={`px-3 py-2 w-full justify-center lg:w-auto relative hover:text-secondary dark:hover:text-primary text-[15px] lg:after:content-[''] lg:after:absolute lg:after:bottom-0 lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:h-[2px] lg:after:bg-primary lg:after:transition-all lg:dark:after:bg-secondary lg:after:duration-300 hover:after:w-full inline-flex rounded-md  ${
                  path === nav.to
                    ? "text-primary lg:text-secondary dark:text-primary lg:dark:text-primary border-primary border lg:border-none bg-transparent lg:after:w-full"
                    : "text-dark/90 after:w-0 border-none"
                } `}
              >
                {nav.label}
              </Link>
            </SheetCloseWrapper>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
