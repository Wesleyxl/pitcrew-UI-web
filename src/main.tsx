import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "./components/ui/provider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
