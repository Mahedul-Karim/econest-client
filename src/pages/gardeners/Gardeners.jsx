import Container from "@/components/common/Container";
import GardenersCard from "@/components/common/gardeners/GardenersCard";
import useServer from "@/hooks/useServer";
import HydrateFallback from "@/routes/HydrateFallback";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Gardeners = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gardeners, setGardeners] = useState([]);

  const { callFetch } = useServer();

  useEffect(() => {
    const getGardeners = async () => {
      try {
        setIsLoading(true);

        const data = await callFetch("gardeners");

        setGardeners(data?.gardeners);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getGardeners();
  }, []);

  return (
    <main className="bg-foreground dark:bg-background">
      <Container className="py-8 md:py-16">
        {isLoading && <HydrateFallback />}
        {!isLoading && gardeners?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mt-6">
            {gardeners?.map((card, i) => (
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
        )}
      </Container>
    </main>
  );
};

export default Gardeners;
