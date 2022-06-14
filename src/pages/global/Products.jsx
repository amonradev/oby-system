import '../../assets/css/@Global.css';
import { MainCard } from '../../components/@Global/Cards/MainCard';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import { TableProducts } from '../../components/@Global/Table/TableProducts';
import { CardTitle } from '../../components/@Global/Titles/CardTitle';
import { PageTitle } from '../../components/@Global/Titles/PageTitle';

export const Products = () => {
    const data = [{
        "id": 9,
        "name": "naotem",
        "quantity": 20,
        "price": 200,
        "requests": 10
    },
    {
        "id": 5,
        "name": "naotem",
        "quantity": 20,
        "price": 200,
        "requests": 10
    }];

    return (
        <div className="page">
            <Sidebar active='products' />
            <div className="page__body">
                <PageTitle title="Produtos" />
                <MainCard>
                    <CardTitle title="Lista de Produtos" />
                    <div className="main__content">
                        <TableProducts data={data} />
                    </div>
                </MainCard>
            </div>
        </div>
    );
}