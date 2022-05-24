import '../../assets/css/@Global.css';
import { MainCard } from '../../components/@Global/Cards/MainCard';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import { Table } from '../../components/@Global/Table/Table';
import { PageTitle } from '../../components/@Global/Titles/PageTitle';

export const Clients = () => {
    const header = ['Nome/Idade', 'Problema', 'Satisfação'];
    const data = [[
        'ricado',
        'Defeito no Hd',
        '97%'
    ],
    [
        'kiki',
        'nao tem',
        '70%'
    ]];

    return (
        <div className="page">
            <Sidebar active='clients' />
            <div className="page__body">
                <PageTitle title="Clientes" />
                <MainCard>
                    <CardTitle title="Gráfico de Atendimentos" />
                    <div className="main__content">
                        <Table header={header} data={data} />
                    </div>
                </MainCard>
            </div>
        </div>
    );
}