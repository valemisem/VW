import type { FC } from "react";
import { useRouteError } from "react-router";

export const Error: FC = () => {
  const error = useRouteError() as { statusText: string; message: string };
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
