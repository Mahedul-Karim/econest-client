import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "./nav/Nav";
import NavActions from "./nav/NavActions";
import MobileNav from "./nav/MobileNav";
import { useStore } from "@/store/Provider";
import Image from "../common/user/Image";
import DarkMode from "../common/buttons/DarkMode";
import { useLocation } from "react-router";

const Header = () => {
  const { user } = useStore();

  const location = useLocation();

  const pathname = location?.pathname;

  return (
    <header className={`bg-background dark:bg-foreground ${pathname !== '/' && 'border-b dark:border-border border-gray-200'}`}>
      <Container className="py-2 flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-2 lg:gap-6">
          <Nav />
          <NavActions />
        </div>
        <div className="flex lg:hidden gap-4 items-center">
          {user && <Image />}
          <DarkMode />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
