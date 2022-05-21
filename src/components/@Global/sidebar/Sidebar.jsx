import { SidebarButton } from "./SidebarButton";
import './sidebar.css';
import {faGear, 
        faHouse, 
        faChalkboardUser, 
        faBoxArchive} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = ({active}) => {

    return (
        <div className="sidebar__div">
            <div className="sidebar__div--logo">
                <img src="src\assets\svg\oby.svg" className="sidebar__img--oby" />
                <label className="sidebar__label--title">Oby</label>
            </div>
            <SidebarButton name="Relatório Geral" icon={faHouse} page='home' active={active} to='/pagina-inicial' />
            <SidebarButton name="Atendimentos" icon={faChalkboardUser} active={active} page='clients' to='/clientes' />
            <SidebarButton name="Estoque" icon={faBoxArchive} active={active} page='products' to='/produtos' />
            <SidebarButton name="Configurações" icon={faGear} active={active} page='configs' to='/configuracoes' />
        </div>
    );
}