import React from "react";

const Section = (props: { children: React.ReactNode }) => {
  return <div className="py-5 md:py-10 lg:py-20">{props.children}</div>;
};

export default Section;
