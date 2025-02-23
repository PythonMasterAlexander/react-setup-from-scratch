import { createRoot } from "react-dom/client";
import { PageApplication } from "App.tsx";

//Get the root id used in ../../public/index.html
const domeNode = document.getElementById("root");

//Display the PageApplication on the index page in ../../public/index.html
const root = createRoot(domeNode);
root.render(<PageApplication />);

