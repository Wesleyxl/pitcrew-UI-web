import { Route, Routes } from "react-router-dom"
import DashboardF1V1 from "./pages/Dashboard-f1-v1"

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DashboardF1V1 />} />
      <Route
        path="/dashboard"
        element={
          <div>
            <h1>Dashboard</h1>
          </div>
        }
      />
    </Routes>
  )
}

export default App
