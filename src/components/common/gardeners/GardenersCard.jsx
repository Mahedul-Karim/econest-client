import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GardenersCard = ({
  name,
  age,
  gender,
  experiences = [],
  image,
  totalSharedTips,
  status,
}) => {
  return (
    <Card className="border-none shadow-none bg-background gap-4">
      <CardHeader className="px-4 xs:px-6 relative">
        <img
          src={image}
          alt="Gardener image"
          className="rounded-xl w-full object-cover h-[100px] xs:h-[160px] sm:h-[220px]"
        />
        <div className="absolute top-4 right-10 hidden xs:block">
          <Badge
            className={`rounded-full capitalize ${
              status === "inactive"
                ? "bg-danger text-white"
                : "bg-primary text-white"
            }`}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-4 xs:px-6 flex flex-col gap-2 flex-1">
        <h3 className="text-lg xs:text-xl font-semibold text-dark leading-tight">{name}</h3>
        <div className="text-xs xs:text-sm text-muted space-y-1">
          <p>
            Age: <span>{age}</span>
          </p>
          <p>
            Gender: <span>{gender}</span>
          </p>
        </div>
        <div className="hidden xs:flex gap-2 flex-wrap">
          {experiences?.length > 0 &&
            experiences.map((exp, i) => (
              <Badge key={i} className={"rounded-full bg-info/20 text-info"}>
                {exp}
              </Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter className="px-4 xs:px-6 hidden xs:flex flex-1">
        <p className="bg-foreground/60 px-1 py-4 rounded-xl w-full xs:text-2xl text-lg text-primary font-semibold flex items-center justify-center gap-2">
          {totalSharedTips}{" "}
          <span className="text-xs xs:text-sm text-muted font-normal">
            Shared Tips
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default GardenersCard;
