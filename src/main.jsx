import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Parents from "./00_Parents/Parent.jsx";
import { ContextProvider } from "./01_Context/ContextProvider.jsx";
import { router } from "./02_Components/02_Routers/router.jsx";
import "./04_Variables_And_StyleComponents/Variables/Fonts_And_Styles.scss";
import "./index.scss";
const queryClient = new QueryClient({});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Parents>
          <RouterProvider router={router} />
        </Parents>
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
