import { SidebarButton } from "./SidebarButton";
import './sidebar.css';
import {faGear, 
        faHouse, 
        faChalkboardUser, 
        faBoxArchive} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = ({active, setActive}) => {

    const pages = ['home', 'clients', 'products', 'configs'];

    if(active != '') {
        pages.map((pagina) => {
            if(pagina == active) {
                document.getElementById(pagina).classList.add('active');
            } else {
                document.getElementById(pagina).classList.remove('active');
            }
        });
    }

    return (
        <div className="sidebar__div">
            <div className="sidebar__div--logo">
                <img src="src\assets\svg\oby.svg" className="sidebar__img--oby" />
                <label className="sidebar__label--title">Oby</label>
            </div>
            <SidebarButton name="Relatório Geral" icon={faHouse} page='home' action={() => setActive('home')} />
            <SidebarButton name="Atendimentos" icon={faChalkboardUser} page='clients' action={() => setActive('clients')} />
            <SidebarButton name="Estoque" icon={faBoxArchive} page='products' action={() => setActive('products')} />
            <SidebarButton name="Configurações" icon={faGear} page='configs' action={() => setActive('configs')} />
        </div>
    );
}