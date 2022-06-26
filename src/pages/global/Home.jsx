import React, { useEffect } from "react";
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import '../../assets/css/@Global.css';
import { PageTitle } from "../../components/@Global/Titles/PageTitle";
import { CardTitle } from "../../components/@Global/Titles/CardTitle";
import { MainCard } from "../../components/@Global/Cards/MainCard";
import { InfosTitles } from "../../components/@Global/Titles/InfosTitles";
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official'
import { useState } from "react";
import axios from 'axios';
import { api } from "../../api/paths";

export const Home = () => {

    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [satisfaction, setSatisfaction] = useState('0%');

    useEffect(() => {
        function fetchData () {
                axios({
                    url: `${api}/clients`,
                    method: 'GET',
                }).then(res => {
                    setClients(res.data.length);

                    let satis = 0;
                    res.data.map(data => {
                        satis += parseInt(data.satisfaction || 0)
                    });
                    setSatisfaction(`${satis}%`);
                }).catch(err => {
                    ErrorToast('Ocorreu um erro!');
                    console.log(err);
                })
        }
        fetchData();
    }, [''])

    useEffect(() => {
        function fetchData () {
                axios({
                    url: `${api}/products`,
                    method: 'GET',
                }).then(res => {
                    setProducts(res.data.length);
                }).catch(err => {
                    ErrorToast('Ocorreu um erro!');
                    console.log(err);
                })
        }
        fetchData();
    }, [''])

    const dataTest = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Relatório'
        },
        series: [
            {   
                name: 'Meta Mensal',
                data: [500, 400, 500, 600, 700, 700, 600, 500]
            },
            {   
                name: 'Atendidos',
                data: [111, 300, 450, 550, 480, 490, 300, 500]
            },
        ],
        xAxis: {
            categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto']
        }
    };

    return (
        <div className="page">
            <Sidebar active='home' />
            <div className="page__body">
                <PageTitle title="Relatório Geral" />
                <MainCard>
                    <CardTitle title="Gráfico de Atendimentos" />
                    <div className="main__content">
                        <div className="highchart__div">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={dataTest}
                                containerProps={{ style: { 
                                                    width: "100%",
                                                    height: "100%" 
                                                    } 
                                                }}
                            />
                        </div>
                        <div className="right__infos">
                            <InfosTitles title="Clientes" quantity={clients} />                            
                            <InfosTitles title="Produtos" quantity={products} />                            
                            <InfosTitles title="Satisfação" quantity={satisfaction} />                            
                        </div>
                    </div>
                </MainCard>
            </div>
        </div>
    );
}