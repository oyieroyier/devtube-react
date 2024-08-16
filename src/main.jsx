import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import ResultsContextProvider from "./contexts/results-context/ResultsContextProvider";
import SearchContextProvider from "./contexts/search-context/SearchContextProvider";
import { BiMoon, BiSun } from "react-icons/bi";

const theme = localStorage.getItem("theme");

function changeTheme() {
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    window.location.reload();
  } else {
    localStorage.setItem("theme", "light");
    window.location.reload();
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider defaultColorScheme={theme}>
      <SearchContextProvider>
        <ResultsContextProvider>
          <button onClick={changeTheme} className="absolute left-4 top-4">
            {theme === "dark" ? <BiSun /> : <BiMoon />}
          </button>
          <Notifications position="top-center" zIndex={1000} />
          <App />
        </ResultsContextProvider>
      </SearchContextProvider>
    </MantineProvider>
  </StrictMode>,
);
