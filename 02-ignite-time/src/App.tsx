import { ThemeProvider } from "styled-components";
import { defualtTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defualtTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
