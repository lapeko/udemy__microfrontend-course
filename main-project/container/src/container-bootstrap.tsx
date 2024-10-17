import {App} from "./App";
import {createRoot} from "react-dom/client";

const el = document.getElementById("root");

if (!el)
    throw new Error("Container not found");

console.log("creating root");
const root = createRoot(el);
root.render(<App />)
