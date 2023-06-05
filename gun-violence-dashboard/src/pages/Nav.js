import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Explore from "./Explore";
import Compare from "./Compare";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.css';


export const Navbar = () => {
    return (
        <><nav className="navbar navbar-expand navbar-light text-align-center bg-primary">
            <ul className="navbar-nav d-flex flex-wrap">
                <li className="logo">
                    <a className="nav-link text-white font-weight-bold" href="/gun-violence-dashboard">Gun Violence Dashboard</a>
                </li>
                <li className="nav-item p-2">
                    <a className="nav-link text-white font-weight-bold" href="/gun-violence-dashboard">Home</a>
                </li>
                <li className="nav-item p-2">
                    <a className="nav-link text-white font-weight-bold" href="/gun-violence-dashboard/explore">Explore</a>
                </li>
                <li className="nav-item p-2">
                    <a className="nav-link text-white font-weight-bold" href="/gun-violence-dashboard/compare">Compare</a>
                </li>
                <li className="nav-item p-2">
                    <a className="nav-link text-white font-weight-bold" href="/gun-violence-dashboard/about">About</a>
                </li>
            </ul>
        </nav>
            <BrowserRouter>
                <Routes>
                    <Route title='Homepage' path='/gun-violence-dashboard' element={<Homepage />} />
                    <Route title='Explore' path='/gun-violence-dashboard/explore' element={<Explore />} />
                    <Route title='Compare' path='/gun-violence-dashboard/compare' element={<Compare />} />
                    <Route title='About' path='/gun-violence-dashboard/about' element={<About />} />
                </Routes>
            </BrowserRouter></>
    );
};

export default Navbar;
