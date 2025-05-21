import React from "react";
import Container from "../common/Container";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";

const Newsletter = () => {
  return (
    <Fade>
      <Container className="py-8 md:py-16">
        <div className="bg-[url('https://i.ibb.co/XxFhjdrq/newsletter.jpg')] bg-cover bg-center bg-no-repeat min-h-60 rounded-xl flex items-center justify-center px-4">
          <div className="py-8 bg-white/10 backdrop-blur-[5px] max-w-[900px] rounded-xl w-full flex flex-col items-center gap-4 px-4">
            <h3 className="text-white font-semibold text-xl xs:text-2xl sm:text-3xl drop-shadow-md">
              Get Latest Updates
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-[540px] w-full">
              <Input
                className="xs:h-10 sm:h-11 bg-white dark:bg-white  placeholder:text-muted placeholder:font-normal shadow-none text-black"
                placeholder="Enter your email"
              />
              <Button className="xs:h-10 sm:h-11 font-medium px-6 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Fade>
  );
};

export default Newsletter;
