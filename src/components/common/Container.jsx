import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <section className={`max-w-7xl mx-auto w-11/12 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
