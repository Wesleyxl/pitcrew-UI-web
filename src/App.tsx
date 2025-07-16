import { Route, Routes } from "react-router-dom"
import DashboardF1V1 from "./pages/Dashboard-f1-v1"
import Dashboard1 from "components/Dashboards/Dashboard1"

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DashboardF1V1 />} />
      <Route path="/dashboard1" element={<Dashboard1 />} />
    </Routes>
  )
}

export default App
