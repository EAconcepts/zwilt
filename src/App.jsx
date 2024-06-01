import { Route, Routes } from "react-router-dom"
import TopNav from "./components/TopNav"
import Home from "./Home"

function App() {

  return (
   <div className="font-switzer">
    <TopNav/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
   </div>
  )

}

export default App
