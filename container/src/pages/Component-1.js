import React, { useRef } from "react";

export const Component1 = () => {
  const ref = useRef(null);

  return <app-root ref={ref}></app-root>;
};
