import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const Image = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <Popover>
          <PopoverTrigger asChild>
            <TooltipTrigger>
              <Avatar className={"size-10 cursor-pointer"}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
          </PopoverTrigger>
          <PopoverContent className="bg-background dark:bg-foreground border-border text-dark">
            <Button className="w-full bg-danger dark:bg-danger hover:bg-danger dark:hover:bg-danger text-white" >Logout</Button>
          </PopoverContent>
        </Popover>

        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Image;
