import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Nutri Club</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}