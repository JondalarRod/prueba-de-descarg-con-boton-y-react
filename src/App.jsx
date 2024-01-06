import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import "./css/style.css"
import {useState} from "react"

const App = () => {
    const [language, setLanguage] = useState(typeof window !== 'undefined' && localStorage.getItem('lang') || "es")

    const cambio = lan => {
        setLanguage(lan)
        localStorage.setItem('lang', lan)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home language={language}/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App
