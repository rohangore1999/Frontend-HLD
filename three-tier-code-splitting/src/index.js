import React from "react";
import { createRoot } from "react-dom/client";

// App
import App from "./App";

// Render the application
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
