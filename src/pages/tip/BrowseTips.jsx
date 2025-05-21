import Container from "@/components/common/Container";
import Loader from "@/components/common/loader/Loader";
import TipsTables from "@/components/tips/all-tips/TipsTables";
import useServer from "@/hooks/useServer";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BrowseTips = () => {
  const { callFetch } = useServer();

  const [tips, setTips] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const setType = (value) => {
    if (value === "All") {
      searchParams.delete("type");
    } else {
      searchParams.set("type", value);
    }

    setSearchParams(searchParams);
  };

  const type = searchParams.get("type") || "";

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        const data = await callFetch(`tips?type=${type}`);

        setTips(data?.tips);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [type]);

  return (
    <main className="py-8 md:py-16 bg-foreground dark:bg-background">
      <Container className="p-6 rounded-xl bg-background dark:bg-foreground">
        <div className="mb-8 flex items-center justify-end">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select difficuly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {isLoading && (
          <div className="h-[50vh] grid place-items-center">
            <Loader />
          </div>
        )}
        {!isLoading && tips.length > 0 && <TipsTables tips={tips} />}
      </Container>
    </main>
  );
};

export default BrowseTips;
