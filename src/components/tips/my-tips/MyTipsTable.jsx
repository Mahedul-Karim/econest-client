import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import TipsForm from "../TipsForm";
import { toast } from "sonner";
import useServer from "@/hooks/useServer";

const MyTipsTable = ({ tips = [] }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const [openDelete, setOpenDelete] = useState(false);
  const [deletionId, setDeletionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [allTips, setAllTips] = useState([...tips]);

  const { callFetch } = useServer();

  const handleDeletion = async () => {
    try {
      setIsLoading(true);

      const options = {
        method: "DELETE",
      };

      const res = await callFetch(`tips/${deletionId}`, options);

      const newData = [...allTips].filter((tip) => tip._id !== deletionId);

      setAllTips(newData);
      toast.success(res.message);
      setOpenDelete(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="overflow-x-auto border border-solid border-border rounded-xl">
        {allTips?.length > 0 && (
          <Table className="table-fixed">
            <TableHeader className="bg-foreground dark:bg-background rounded-xl">
              <TableRow className="h-13">
                <TableHead className="w-[250px] px-5">Title</TableHead>
                <TableHead className="w-[120px]">Category</TableHead>
                <TableHead className="w-[100px]">Availability</TableHead>
                <TableHead className={"w-[80px]"}>Liked</TableHead>
                <TableHead className="w-[100px]">Difficulty</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allTips.map((tip) => (
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
                        tip?.availability === "Public"
                          ? "bg-primary"
                          : "bg-danger"
                      }`}
                    >
                      {tip?.availability}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <p>{tip?.totalLiked}</p>
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
                    <div className="flex items-center justify-center md:gap-1">
                      <Button
                        variant={"ghost"}
                        className={"text-dark hover:scale-[1.2]"}
                        onClick={() => {
                          setOpen(true);
                          setData(tip);
                        }}
                      >
                        <Pencil />
                      </Button>
                      <Button
                        variant={"ghost"}
                        className={"text-dark hover:scale-[1.2]"}
                        onClick={() => {
                          setOpenDelete(true);
                          setDeletionId(tip?._id);
                        }}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <Dialog
        open={open}
        onOpenChange={(val) => {
          setOpen(val);
          setData(null);
        }}
      >
        <DialogContent className="bg-background dark:bg-foreground border-border h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="font-semibold text-dark text-center xs:text-2xl text-xl">
              Update Tip
            </DialogTitle>
            <DialogDescription className="sr-only">
              This is a update form
            </DialogDescription>
          </DialogHeader>
          <div>
            <TipsForm
              defaultValue={data}
              formType={"update"}
              prevData={allTips}
              updateTips={setAllTips}
              setOpen={setOpen}
            />
          </div>
        </DialogContent>
      </Dialog>
      <AlertDialog
        open={openDelete}
        onOpenChange={(val) => {
          setOpenDelete(val);
          setDeletionId(null);
        }}
      >
        <AlertDialogContent className="bg-background dark:bg-foreground border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-dark">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted">
              This action cannot be undone. This will permanently delete your
              tip and remove your tip from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-border">
              Cancel
            </AlertDialogCancel>
            <Button onClick={handleDeletion} disabled={isLoading}>
              Continue
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MyTipsTable;
