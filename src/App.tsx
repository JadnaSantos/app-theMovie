import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"
import { Router } from "./router"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
