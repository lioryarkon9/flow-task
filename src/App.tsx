import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./Routes";

import { StateProvider } from "./stateManager/state.context";

function App() {
  return (
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  );
}

export default App;
