import Container from "@/components/common/Container";
import React from "react";
import { Link, useRouteError } from "react-router";

const NotFound = () => {
  const error = useRouteError();

  return (
    <Container className="py-10">
      <div className="flex items-center justify-center">
        <img src="/error.png" alt="" className="max-h-[350px]" />
      </div>
      <p className="my-4 text-center text-muted whitespace-pre-wrap">
        {error?.message ||
          "Oops! The page you're looking for seems to have taken a different path.\n It might be under construction or doesn't exist."}
      </p>
      <div className="flex items-center justify-center">
        <Link
          to="/"
          className={`px-6 h-10 bg-primary text-white rounded-full hover:bg-secondary inline-flex items-center justify-center font-medium`}
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
