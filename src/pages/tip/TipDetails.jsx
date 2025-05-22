import Container from "@/components/common/Container";
import useServer from "@/hooks/useServer";
import HydrateFallback from "@/routes/HydrateFallback";
import ProtectedRoutes from "@/routes/ProtectedRoutes";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { toast } from "sonner";
import Heading from "./details/Heading";
import Banner from "./details/Banner";
import Details from "./details/Details";

const TipDetails = () => {
  const { tipId } = useParams();

  const [tip, setTip] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const { callFetch } = useServer();

  useEffect(() => {
    (async function () {
      try {
        const data = await callFetch(`tips/${tipId}`);

        setTip(data?.tip);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <HydrateFallback />;
  }

  if (!isLoading && !tip) {
    toast.warning("No tips were found for this id!");
    return <Navigate to="/" />;
  }

  return (
    <ProtectedRoutes>
      <Container className="py-8 md:py-16">
        <Heading
          title={tip?.title}
          totalLiked={tip?.totalLiked}
          setTip={setTip}
          id={tip?._id}
          category={tip?.category}
        />
        <Banner src={tip?.image} />
        <Details
          topic={tip?.topic}
          difficulty={tip?.difficulty}
          description={tip?.description}
        />
      </Container>
    </ProtectedRoutes>
  );
};

export default TipDetails;
