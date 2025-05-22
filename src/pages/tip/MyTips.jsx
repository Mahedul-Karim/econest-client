import Container from "@/components/common/Container";
import Loader from "@/components/common/loader/Loader";
import MyTipsTable from "@/components/tips/my-tips/MyTipsTable";
import useServer from "@/hooks/useServer";
import ProtectedRoutes from "@/routes/ProtectedRoutes";
import { useStore } from "@/store/Provider";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const MyTips = () => {
  const { callFetch } = useServer();

  const [tips, setTips] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { user } = useStore();

  useEffect(() => {
    if (!user?.email) return;

    (async function () {
      try {
        setIsLoading(true);

        const data = await callFetch(`tips`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
        });

        setTips(data?.tips);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user?.email]);

  return (
    <ProtectedRoutes>
      <main className="py-8 md:py-16 bg-foreground dark:bg-background">
        <Container className="p-6 rounded-xl bg-background dark:bg-foreground">
          <h2 className="font-semibold text-dark text-center xs:text-2xl text-xl">
            My Tips
          </h2>
          <div className="mt-8">
            {isLoading && (
              <div className="h-[50vh] grid place-items-center">
                <Loader />
              </div>
            )}
            {!isLoading && tips.length > 0 && <MyTipsTable tips={tips} />}
          </div>
        </Container>
      </main>
    </ProtectedRoutes>
  );
};

export default MyTips;
