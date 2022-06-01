import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
// import Footer from "./components/Footer";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App />
    {/* <Footer /> */}
  </StrictMode>
);
