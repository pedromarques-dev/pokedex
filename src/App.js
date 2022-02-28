import { createGlobalStyle } from "styled-components";
import { ThemeProvider, themes } from "./context/theme-toggler";
import { AppRoutes } from "./pages/routes";

function App() {

  return (
    <>
    <ThemeProvider value={{themes}}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
    </>
  );
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Pokemon';
        src: url(./fonts/pokemon-hollow.ttf) format('truetype');
    };
  @font-face {
    font-family: 'Pokemon Alternative';
    src: url(./fonts/pokemon-solid.ttf) format('truetype');
  }
  
    * {
      margin: 0;
      padding: 0;
    }
/* 
    body {
      background-attachment: fixed;
      background-size: cover;
    } */

    img {
      max-width: 100%;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    button {
      border-style: none;
      cursor: pointer;
    }
`

export default App;
