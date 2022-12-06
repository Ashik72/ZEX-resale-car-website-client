import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
