import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../../api/paths';
import '../../assets/css/@Global.css';
import { MainCard } from '../../components/@Global/Cards/MainCard';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import { TableClients } from '../../components/@Global/Table/TableClients';
import { CardTitle } from '../../components/@Global/Titles/CardTitle';
import { PageTitle } from '../../components/@Global/Titles/PageTitle';

export const Clients = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        function fetchData () {
                axios({
                    url: `${api}/clients`,
                    method: 'GET',
                }).then(res => {
                    setData(res.data);
                }).catch(err => {
                    ErrorToast('Ocorreu um erro!');
                    console.log(err);
                })
        }
        fetchData();
    }, [''])

    return (
        <div className="page">
            <Sidebar active='clients' />
            <div className="page__body">
                <PageTitle title="Atendimentos" />
                <MainCard>
                    <CardTitleWithButton title="Clientes" type="clients" />
                    <div className="main__content">
                        <TableClients data={data} />
                    </div>
                </MainCard>
            </div>
        </div>
    );
}