import { createRoot } from "react-dom/client";

//Get the root id used in ../../dist/index.html
const pageApplication = document.getElementById("root");

//Create the PageApplication, this is what gets displayed on the page
function PageApplication() {
		return <div>Hello World</div>;
}

//Display the PageApplication on the index page in ../../dist/index.html
const root = createRoot(pageApplication);
root.render(<PageApplication />);

