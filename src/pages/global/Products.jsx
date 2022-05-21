import '../../assets/css/@Global.css';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";

export const Products = () => {
    return (
        <div className="page">
            <Sidebar active='products' />
            <h1>
                Hello World
            </h1>
        </div>
    );
}