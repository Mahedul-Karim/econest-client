import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "./nav/Nav";
import NavActions from "./nav/NavActions";
import MobileNav from "./nav/MobileNav";

const Header = () => {
  return (
    <header className="bg-background dark:bg-foreground">
      <Container className="py-2 flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-2 lg:gap-6">
          <Nav />
          <NavActions />
        </div>
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
