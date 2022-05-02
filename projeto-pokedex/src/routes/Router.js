import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomePage from '../pages/HomePage'
import Pokedex from '../pages/Pokedex'
import Details from '../pages/Details'
import Error from "../pages/Error";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />

                <Route path="pokedex" element={<Pokedex/>} />

                <Route path="details" element={<Details />} />               

                <Route path="*" element={<Error />} />                
            </Routes>
        </BrowserRouter>
    )
}
export default Router;