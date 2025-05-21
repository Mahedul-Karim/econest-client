import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Title from "../common/Title";
import TipsCard from "../common/tips/TipsCard";
import { Fade } from "react-awesome-reveal";
import useServer from "@/hooks/useServer";
import { toast } from "sonner";

const TrendingTips = () => {
  const [tips, setTips] = useState([]);

  const { callFetch } = useServer();

  useEffect(() => {
    callFetch(`tips/featured`)
      .then((data) => setTips(data?.tips))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <Fade>
      <Container className="py-8 md:py-16">
        <Title text={"Trending Tips"} highlight="Tips" />
        <div className="mt-6 grid lg:grid-cols-2 gap-4">
          {tips?.length > 0 &&
            tips?.map((tip, i) => (
              <TipsCard
                key={i}
                id={tip._id}
                title={tip.title}
                topic={tip.topic}
                difficulty={tip.difficulty}
                description={tip.description}
                image={tip.image}
                category={tip.category}
              />
            ))}
        </div>
      </Container>
    </Fade>
  );
};

export default TrendingTips;
