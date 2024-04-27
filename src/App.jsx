import { Routes, Route } from "react-router-dom"
import Home from './views/Home'
import Contact from "./views/Contact"
import NotFound from "./views/NotFound"
import Menu from "./components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/App.css"

const App = () => {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </>
  )
}

export default App
