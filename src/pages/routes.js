import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "./homepage"
import { Pokemon } from "./pokemon"
import { HeaderSection } from "../components/header"

export const AppRoutes = () => (
    <BrowserRouter>
           <HeaderSection />
        <Routes>
            <Route exact path="/" element={<Homepage />}/>
            <Route exact path="/:id" element={<Pokemon />}/>
        </Routes>
    </BrowserRouter>
)