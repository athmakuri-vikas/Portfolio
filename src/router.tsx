import { QueryClient } from "@tanstack/react-query";
import { createRouter, createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const hashHistory = createHashHistory();

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    history: hashHistory,
    context: { queryClient },
    basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
