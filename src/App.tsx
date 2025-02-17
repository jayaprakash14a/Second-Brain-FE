import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./Pages/SignIn"
import { SignUp } from "./Pages/SignUp"
import { Dashboard } from "./Pages/Dashboard"
import { SharedDashboard } from "./Pages/SharedDashboard"
import { Layout } from "./Pages/Layout"

function App() {

  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="signin" element={<SignIn/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="share/:brainid" element={<SharedDashboard/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  
}

export default App
