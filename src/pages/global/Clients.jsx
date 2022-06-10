import '../../assets/css/@Global.css';
import { MainCard } from '../../components/@Global/Cards/MainCard';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import { TableClients } from '../../components/@Global/Table/TableClients';
import { CardTitle } from '../../components/@Global/Titles/CardTitle';
import { PageTitle } from '../../components/@Global/Titles/PageTitle';

export const Clients = () => {
    const data = [{
        id: 1,
        name: 'ricado',
        problem: 'Defeito no Hd',
        satisfy: '97%'
    },
    {
        id: 2,
        name: 'kiki',
        problem: 'nao tem',
        satisfy: '70%'
    }];

    return (
        <div className="page">
            <Sidebar active='clients' />
            <div className="page__body">
                <PageTitle title="Atendimentos" />
                <MainCard>
                    <CardTitle title="Clientes" />
                    <div className="main__content">
                        <TableClients data={data} />
                    </div>
                </MainCard>
            </div>
        </div>
    );
}