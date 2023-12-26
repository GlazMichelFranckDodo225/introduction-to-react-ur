// Import React Tools
import ReactDOM from "react-dom/client";

// Import our First Component: App
import { App } from "./App";

// Target the Div whose Id is "root" in the "index.html" file
const divRoot = document.getElementById("root");

// Creation of the First Node of the Virtual DOM from 
// the Div that has the Id "root"
const reactRoot = ReactDOM.createRoot(divRoot);

// Inject our First Component into the Root Node
reactRoot.render(<App />);