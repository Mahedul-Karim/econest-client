import React from "react";
import Container from "@/components/common/Container";
import SignupForm from "@/components/auth/SignupForm";

const SignUp = () => {
  return (
    <main className="bg-foreground dark:bg-background">
      <Container className="py-8 md:py-16">
        <SignupForm />
      </Container>
    </main>
  );
};

export default SignUp;
