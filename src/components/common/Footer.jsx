import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="py-8 md:py-16 bg-zinc-100 dark:bg-[#1B3A28]">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-muted">
            Connecting passionate gardeners across the globe. Share tips, grow
            knowledge, and cultivate a greener tomorrow—together
          </p>
        </div>
        <div>
          <h3 className="text-zinc-800 dark:text-white/90 font-semibold mb-4">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <span className="text-dark/80">
                123 Green Avenue
                <br />
                Eco City, EC 98765
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span className="text-dark/80">(555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span className="text-dark/80">hello@greenspace.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-zinc-800 dark:text-white/90 font-semibold mb-4">
            Terms
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-dark/80 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-dark/80 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-dark/80 hover:text-primary transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-dark/80 hover:text-primary transition-colors duration-300"
              >
                Accessiblity
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-zinc-800 dark:text-white/90 font-semibold mb-4">
            Contact Us
          </h3>
          <div className="flex space-x-4">
                <Link href="/" className="text-dark/80 hover:text-primary transition-colors duration-300">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-dark/80 hover:text-primary transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-dark/80 hover:text-primary transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-dark/80 hover:text-primary transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-dark/80 hover:text-primary transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
