import type { FC } from "react";
import { Typography } from "./Typography";
import { Colors } from "./Colors";
import { ResetCSS } from "../ResetCSS";

export const VWConfig: FC = () => {
  return (
    <>
      <Typography />
      <Colors />
      <ResetCSS />
    </>
  );
};
