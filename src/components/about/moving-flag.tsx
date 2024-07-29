import { forwardRef } from "react";

interface Props {}

export const MovingFlag = forwardRef<HTMLDivElement, Props>(
  ({ ...props }, ref) => {
    return <div ref={ref}>MovingFlug</div>;
  },
);

MovingFlag.displayName = "MovingFlag";
