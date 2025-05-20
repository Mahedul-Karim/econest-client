import React from "react";
import Container from "../common/Container";
import Title from "../common/Title";
import { useLoaderData } from "react-router";
import GardenersCard from "../common/gardeners/GardenersCard";

const FeaturedGardeners = () => {
  const data = useLoaderData();

  return (
    <section className="mt-8 bg-foreground">

    <Container className="py-8 md:py-12">
      <Title text={"Featured Gardeners"} highlight={"Gardeners"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mt-6">
        {data?.length > 0 &&
          data?.map((card, i) => (
            <GardenersCard
              key={i}
              name={card?.name}
              age={card?.age}
              gender={card?.gender}
              experiences={card?.experiences}
              image={card?.image}
              totalSharedTips={card?.totalSharedTips}
              status={card?.status}
            />
          ))}
      </div>
    </Container>
    </section>
  );
};

export default FeaturedGardeners;
