import { createBrowserRouter } from "react-router-dom";
import { PrintsLayout, RootLayout } from "../components";
import {
  PrintsPage,
  ContactPage,
  AboutPage,
  ServicePage,
  HomePage,
  CategoryPage,
} from ".";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "prints",
        element: <PrintsLayout />,
        children: [
          {
            index: true,
            element: <PrintsPage />,
          },
          {
            path: "stickers",
            element: <CategoryPage />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
