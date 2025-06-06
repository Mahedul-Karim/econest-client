import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="bottom-right" />
    </>
  );
}

export default App;
