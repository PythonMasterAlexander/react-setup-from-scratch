import { createRoot } from "react-dom/client";
import { PageApplication } from "App.tsx";

//Get the root id used in ../../dist/index.html
const pageApplication = document.getElementById("root");

//Display the PageApplication on the index page in ../../dist/index.html
const root = createRoot(pageApplication);
root.render(<PageApplication />);

