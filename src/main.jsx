import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import ResultsContextProvider from "./contexts/results-context/ResultsContextProvider";
import SearchContextProvider from "./contexts/search-context/SearchContextProvider";

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
          <button onClick={changeTheme}>haha</button>
          <Notifications />
          <App />
        </ResultsContextProvider>
      </SearchContextProvider>
    </MantineProvider>
  </StrictMode>,
);
