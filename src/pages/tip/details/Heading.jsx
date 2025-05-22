import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useServer from "@/hooks/useServer";
import { Heart } from "lucide-react";
import React from "react";

const Heading = ({ title, totalLiked, setTip, id, category }) => {
  const { callFetch } = useServer();

  const updateLikes = async () => {
    const options = {
      method: "PUT",
    };

    setTip((prev) => ({
      ...prev,
      totalLiked: prev?.totalLiked + 1,
    }));

    await callFetch(`tips/${id}`, options);
  };

  return (
    <header className="flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-dark">{title}</h1>
        <Badge className="rounded-full text-white">{category}</Badge>
      </div>
      <div className="flex items-center">
        <span className="text-dark">{totalLiked}</span>
        <Button
          variant={"ghost"}
          className={"hover:bg-transparent"}
          onClick={updateLikes}
        >
          <Heart className="size-5" />
        </Button>
      </div>
    </header>
  );
};

export default Heading;
