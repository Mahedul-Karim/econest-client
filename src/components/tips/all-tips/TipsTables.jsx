import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { difficultyColor } from "@/lib/data";
import {  buttonVariants } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Link } from "react-router";

const TipsTables = ({ tips = [] }) => {
  return (
    <div className="overflow-x-auto border border-solid border-border rounded-xl">
      <Table className="table-fixed">
        <TableHeader className="bg-foreground dark:bg-background rounded-xl">
          <TableRow className="h-13">
            <TableHead className="w-[350px] px-5">Title</TableHead>
            <TableHead className="w-[150px]">Category</TableHead>
            <TableHead className="w-[100px]">Difficulty</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tips.length > 0 &&
            tips.map((tip) => (
              <TableRow key={tip._id}>
                <TableCell className={"py-4"}>
                  <div className="flex items-center gap-2">
                    <img
                      src={tip?.image}
                      alt=""
                      className="w-24 aspect-[16/10] object-cover rounded-md"
                    />

                    <p className="font-medium">{tip.title}</p>
                  </div>
                </TableCell>
                <TableCell className={"py-4"}>
                  <Badge className="rounded-full">{tip?.category}</Badge>
                </TableCell>
                <TableCell className={"py-4"}>
                  <Badge
                    className={`rounded-full ${
                      difficultyColor?.[tip?.difficulty] || ""
                    }`}
                  >
                    {tip?.difficulty}
                  </Badge>
                </TableCell>
                <TableCell className={"py-4"}>
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      to={`/tip/${tip?._id}`}
                      className={`${buttonVariants({ variant: "ghost",className:"hover:bg-transparent group" })}`}
                    >
                      <Eye className="size-6 group-hover:text-primary transition-all duration-300 group-hover:scale-[1.15] text-dark" />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TipsTables;
