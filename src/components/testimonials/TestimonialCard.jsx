import React from "react";
import { Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";

const TestimonialCard = ({ name, image, location, role, message }) => {
  return (
    <Card className={"border-none shadow-none bg-background justify-between"}>
      <CardContent className="relative z-[1]">
        <div className="absolute top-0 left-4 -z-[1]">
            <Quote className="size-12 text-primary/30 dark:text-primary/20" />
        </div>
        <p className="text-muted italic">"{message}"</p>
      </CardContent>
      <CardFooter className="gap-4">
        <div className="shrink-0">
            <img src={image} alt="Reviewer image" className="size-16 object-cover rounded-full" />
        </div>
        <div>
            <h3 className="text-dark font-semibold leading-[calc(1.25/0.875)]">{name}</h3>
            <p className="text-sm text-secondary">{role}</p>
            <p className="text-xs text-muted">{location}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
