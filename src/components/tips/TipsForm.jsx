import React, { useReducer, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useStore } from "@/store/Provider";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import useServer from "@/hooks/useServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FIELD":
      return {
        title: "",
        topic: "",
        difficulty: "",
        description: "",
        image: "",
        category: "",
        availability: "",
      };
    default:
      return state;
  }
};

const TipsForm = ({ defaultValue, formType = "create" }) => {
  const { user } = useStore();

  const { callFetch } = useServer();

  const initialState = {
    title: defaultValue?.title || "",
    topic: defaultValue?.topic || "",
    difficulty: defaultValue?.difficulty || "",
    description: defaultValue?.description || "",
    image: defaultValue?.image || "",
    category: defaultValue?.category || "",
    availability: defaultValue?.availability || "",
    name: user?.displayName,
    email: user?.email,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { ...state };

    delete data.name;

    let endpoint =
      formType === "create" ? "tips/create" : `tips/${defaultValue?._id}`;

    try {
      setIsLoading(true);

      const options = {
        method: formType === "create" ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      await callFetch(endpoint, options);
      toast.success("Shared tip successfully!");

      dispatch({ type: "RESET_FIELD" });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={`max-w-[600px] mx-auto space-y-4`} onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label className="text-dark">Title:</Label>
        <Input
          placeholder="How I Grow Tomatoes Indoors"
          type="text"
          className={"bg-background dark:bg-background h-10"}
          disabled={isLoading}
          value={state?.title}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "title",
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label className="text-dark">Topic:</Label>
        <Input
          placeholder="Urban Gardening"
          type="text"
          className={"bg-background dark:bg-background h-10"}
          disabled={isLoading}
          value={state?.topic}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "topic",
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label className="text-dark">Description:</Label>
        <Textarea
          className={"bg-background dark:bg-background h-32"}
          placeholder="Steps to grow tomato indoor"
          disabled={isLoading}
          value={state?.description}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "description",
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="grid xs:grid-cols-2 gap-2">
        <div className="space-y-2">
          <Label className="text-dark">Description:</Label>
          <Select
            value={state?.difficulty}
            onValueChange={(val) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "difficulty",
                value: val,
              })
            }
          >
            <SelectTrigger className="w-full bg-background dark:bg-background">
              <SelectValue placeholder="Difficulty Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-dark">Description:</Label>
          <Select
            value={state?.category}
            onValueChange={(val) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "category",
                value: val,
              })
            }
          >
            <SelectTrigger className="w-full bg-background dark:bg-background">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Plant Care">Plant Care</SelectItem>
              <SelectItem value="Composting">Composting</SelectItem>
              <SelectItem value="Soil Management">Soil Management</SelectItem>
              <SelectItem value="Vertical Gardening">
                Vertical Gardening
              </SelectItem>
              <SelectItem value="Plant Protection">Plant Protection</SelectItem>
              <SelectItem value="Organic Gardening">
                Organic Gardening
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-dark">Image URL:</Label>
        <Input
          placeholder="www.unsplash.com/user"
          type="text"
          className={"bg-background dark:bg-background h-10"}
          disabled={isLoading}
          value={state?.image}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "image",
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label className="text-dark">Availability:</Label>
        <Select
          value={state?.availability}
          onValueChange={(val) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "availability",
              value: val,
            })
          }
        >
          <SelectTrigger className="w-full bg-background dark:bg-background">
            <SelectValue placeholder="Availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Public">Public</SelectItem>
            <SelectItem value="Hidden">Hidden</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label className="text-dark">User Name:</Label>
        <Input
          type="text"
          className={"bg-background dark:bg-background h-10"}
          disabled
          value={state?.name}
        />
      </div>
      <div className="space-y-2">
        <Label className="text-dark">User Email:</Label>
        <Input
          type="text"
          className={"bg-background dark:bg-background h-10"}
          disabled
          value={state?.email}
        />
      </div>
      <Button className="w-full font-medium" disabled={isLoading}>
        Share Tip
      </Button>
    </form>
  );
};

export default TipsForm;
