import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { difficultyColor } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const TipsCard = ({
  title,
  topic,
  difficulty,
  description,
  image,
  category,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="border-gray-200 dark:border-border bg-background dark:bg-foreground shadow-none py-4">
      <CardContent className="flex-col sm:flex-row gap-4 flex sm:items-center px-4">
        <div className="shrink-0 relative sm:h-full">
          <img
            src={image}
            alt="Garden Images"
            className=" sm:w-[200px] aspect-[16/12] object-cover rounded-xl sm:h-full"
          />
          <div className="absolute top-1 right-1">
            <Badge className="rounded-full text-white">{category}</Badge>
          </div>
        </div>
        <div className="grow flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-dark">{title}</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm text-muted">Topic: </p>
            <Badge className="rounded-full bg-info/20 text-info">{topic}</Badge>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm text-muted">Difficulty: </p>
            <Badge
              className={`rounded-full ${difficultyColor?.[difficulty] || ""}`}
            >
              {difficulty}
            </Badge>
          </div>
          <p className="text-muted line-clamp-2 text-sm">{description}</p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white dark:bg-transparent dark:hover:bg-primary dark:border-primary"
            onClick={() => {
              navigate(`/tip/${id}`);
            }}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
