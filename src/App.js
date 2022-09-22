import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/Global.styled";
import Page from "./components/Page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  );
}

export default App;
