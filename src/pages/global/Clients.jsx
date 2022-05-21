import '../../assets/css/@Global.css';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";

export const Clients = () => {
    return (
        <div className="page">
            <Sidebar active='clients' />
            <h1>
                Hello World
            </h1>
        </div>
    );
}