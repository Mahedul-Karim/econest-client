import { Badge } from "@/components/ui/badge";
import { difficultyColor } from "@/lib/data";
import React from "react";

const Details = ({ topic, difficulty, description }) => {
  return (
    <main className="space-y-6">
      <section className="space-y-4">
        <div className="grid grid-cols-2 gap-4 max-w-[300px]">
          <p className="text-dark text-sm font-medium">Topic: </p>
          <Badge className="rounded-full bg-info/20 text-info">{topic}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-[300px]">
          <p className="text-dark text-sm font-medium">Difficulty: </p>
          <Badge
            className={`rounded-full ${difficultyColor?.[difficulty] || ""}`}
          >
            {difficulty}
          </Badge>
        </div>
      </section>
      <section>
        <p className="text-muted max-w-[500px]">{description}</p>
      </section>
    </main>
  );
};

export default Details;
