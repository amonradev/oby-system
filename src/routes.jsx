import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/access/Login";
import { Register } from "./pages/access/Register";

export const Routing = () => {
    return (    
    <BrowserRouter>
    	<Routes>
			<Route path="/" element={<Login />} />
			<Route path='/cadastro' element={<Register />} />
		</Routes>
    </BrowserRouter>
    );
}