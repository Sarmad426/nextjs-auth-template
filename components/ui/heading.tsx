import React from "react";

type HeadingProps = {
  title: string;
  description?: string;
};

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold my-2">{title}</h2>
      <p className="text-secondary-foreground my-2">{description}</p>
    </div>
  );
};
