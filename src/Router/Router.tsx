import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "../components/Layout/Layout";
import { ROUTES } from "../pages/routes";
import { Home } from "../pages/Home/Home";
import { Notes } from "../pages/Notes/Notes";
import { ROUTES_NOTE } from "../pages/Notes/routes";
import { EditNote } from "../pages/Notes/noteId/EditNote/EditNote";
import { ROUTES_NOTES_ID } from "../pages/Notes/noteId/routes";
import { Error } from "../pages/Error/Error";
import { ViewNote } from "../pages/Notes/noteId/ViewNote/ViewNote";
import type { FC } from "react";
import { NewNote } from "../pages/Notes/NewNote/NewNote";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, path: ROUTES.home, element: <Home /> },
      {
        path: ROUTES.notes,
        children: [
          {
            index: true,
            element: <Notes />,
          },
          {
            path: ROUTES_NOTE.new,
            element: <NewNote />,
          },
          {
            path: ROUTES_NOTE.noteId,
            children: [
              {
                path: ROUTES_NOTES_ID.view,
                element: <ViewNote />,
              },
              {
                path: ROUTES_NOTES_ID.edit,
                element: <EditNote />,
              },
              {
                path: "",
                element: <Navigate to={ROUTES_NOTES_ID.view} replace={true} />,
              },
            ],
          },
          {
            path: "",
            element: <Navigate to={ROUTES.notes} replace={true} />,
          },
        ],
      },
      {
        path: "/*",
        element: <Navigate to={ROUTES.home} replace={true} />,
      },
    ],
    errorElement: <Error />,
  },
];

const router = createBrowserRouter(routes);

export const Router: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
