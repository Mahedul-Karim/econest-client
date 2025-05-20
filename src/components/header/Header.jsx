import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "./nav/Nav";
import NavActions from "./nav/NavActions";
import MobileNav from "./nav/MobileNav";
import { useStore } from "@/store/Provider";
import Image from "../common/user/Image";

const Header = () => {
  const { user } = useStore();

  return (
    <header className="bg-background dark:bg-foreground">
      <Container className="py-2 flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-2 lg:gap-6">
          <Nav />
          <NavActions />
        </div>
        <div className="flex lg:hidden gap-4 items-center">
          <MobileNav />
          {user && <Image />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
