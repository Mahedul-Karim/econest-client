import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import useServer from "@/hooks/useServer";
import { toast } from "sonner";
import { isValidPassword } from "@/lib/utils";
import { auth, googleProvider } from "@/config/firebase.config";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { callFetch } = useServer();

  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      const currentUser = await signInWithPopup(auth, googleProvider);

      const email = currentUser?.user?.providerData?.[0]?.email;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      };

      await callFetch("user", options);

      toast.success("Account creation successfull!");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !photoUrl) {
      return toast.error("All fields are required!");
    }

    if (!isValidPassword(password)) {
      return toast.error(
        "The password should be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character."
      );
    }

    try {
      setIsLoading(true);

      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(newUser.user, {
        displayName: name,
        photoURL: photoUrl,
      });

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      };

      await callFetch("user", options);

      toast.success("Account creation successfull!");

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return toast.error("Email already registered!");
      }

      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-none max-w-[460px] mx-auto bg-background dark:bg-foreground">
      <CardHeader>
        <CardTitle className="text-xl text-dark">Create Account</CardTitle>
        <CardDescription className="text-base text-muted">
          Provide your valid information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleForm} className="space-y-4">
          <div className="space-y-2">
            <Label className="text-dark">Name:</Label>
            <Input
              placeholder="Your Name"
              type="text"
              className={"bg-background dark:bg-background h-10"}
              disabled={isLoading}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-dark">Email:</Label>
            <Input
              placeholder="Email Address"
              type="email"
              className={"bg-background dark:bg-background h-10"}
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-dark">Photo URL:</Label>
            <Input
              placeholder="Your image link"
              type="text"
              className={"bg-background dark:bg-background h-10"}
              disabled={isLoading}
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-dark">Password:</Label>
            <Input
              placeholder="Your password"
              type="password"
              className={"bg-background dark:bg-background h-10"}
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full h-10" disabled={isLoading}>
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex items-center gap-2 w-full">
          <div className="h-[1.5px] border border-solid border-border/40 grow" />
          <p className="text-muted/40">OR</p>
          <div className="h-[1.5px] border border-solid border-border/40 grow" />
        </div>
        <div className="my-4 w-full">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 text-muted border-border hover:bg-muted/10"
            onClick={googleSignIn}
          >
            <img src="/assets/google.svg" alt="" className="size-5" />
            Google
          </Button>
        </div>
        <p className="text-sm text-dark">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
