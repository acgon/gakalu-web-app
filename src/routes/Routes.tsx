import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <Login/> } path = "/" />
                <Route element = { <Register/> } path = "/Register" />
                <Route element = { <Home/> } path = "/Home" />
            </Routes>
        </BrowserRouter>
    );
}
