import '../../assets/css/@Global.css';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";

export const Configs = () => {
    return (
        <div className="page">
            <Sidebar active='configs' />
            <h1>
                Hello World
            </h1>
        </div>
    );
}