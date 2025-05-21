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
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase.config";
import { toast } from "sonner";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      toast.success("Account creation successfull!");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      console.log(error.code);

      if(error.code === 'auth/invalid-credential'){
        return toast.error('Invalid credentials!')
      }

      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-none max-w-[460px] mx-auto bg-background dark:bg-foreground">
      <CardHeader>
        <CardTitle className="text-xl text-dark">
          Sign in to your account
        </CardTitle>
        <CardDescription className="text-base text-muted">
          {" "}
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleForm} className="space-y-4">
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
            Log In
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
          Don&apos;t have an account?{" "}
          <Link to="/sign-up" className="text-primary">
            Create One
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
