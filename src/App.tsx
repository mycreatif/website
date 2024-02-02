import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";
import { APIProvider } from "@vis.gl/react-google-maps";

import "atropos/css";
import "swiper/css";

const App = () => {
  return (
    <APIProvider apiKey={"AIzaSyCmTwL0R0hEc7sncY65IMsyc0QsKbXpc80"}>
      <RouterProvider router={router} />
    </APIProvider>
  );
};
export default App;
