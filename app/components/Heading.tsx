"use client";

import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, center, subtitle }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <div className="text-2l font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
