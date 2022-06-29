import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/access/Login";
import { Register } from "./pages/access/Register";
import { Clients } from "./pages/global/clients";
import { Configs } from "./pages/global/Configs";
import { Home } from "./pages/global/Home";
import { Products } from "./pages/global/Products";

export const Routing = () => {
    return (    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/pagina-inicial' element={<Home />} />
            <Route path='/produtos' element={<Products />} />
            <Route path='/clientes' element={<Clients />} />
            <Route path='/configuracoes' element={<Configs />} />
        </Routes>
    </BrowserRouter>
    );
}