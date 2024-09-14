import React from "react";

const Section = (props: { children: React.ReactNode }) => {
  return <div className="py-20 md:py-10 sm:py-5">{props.children}</div>;
};

export default Section;
