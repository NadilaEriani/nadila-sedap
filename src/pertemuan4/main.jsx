import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import Products from "./Products";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <FrameworkList/> */}
    {/* <FrameworkListSearchFilter /> */}
    {/* <ResponsiveDesign /> */}
    <Products />
  </div>
);
