import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../../api/paths';
import '../../assets/css/@Global.css';
import { MainCard } from '../../components/@Global/Cards/MainCard';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import { TableProducts } from '../../components/@Global/Table/TableProducts';
import { CardTitle } from '../../components/@Global/Titles/CardTitle';
import { PageTitle } from '../../components/@Global/Titles/PageTitle';
import { ErrorToast } from '../../utils/Global/ErrorToast';
import { ToastContainer } from 'react-toastify';

export const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        function fetchData () {
                axios({
                    url: `${api}/products`,
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
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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