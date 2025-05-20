import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { AlignCenter } from "lucide-react";
import Logo from "@/components/common/Logo";
import Auth from "@/components/common/buttons/Auth";
import Nav from "./Nav";
import { useStore } from "@/store/Provider";

const MobileNav = () => {

  const { user } = useStore();

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignCenter className="text-dark" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-border bg-background overflow-auto"
        >
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center">
              <Logo closeOnClick />
            </SheetTitle>
            <SheetDescription className="sr-only">
              This is nav.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4">
            <Nav closeOnClick />
          </div>
          <SheetFooter className={"flex-row items-center gap-4 "}>
            {!user && <Auth closeOnClick />}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
