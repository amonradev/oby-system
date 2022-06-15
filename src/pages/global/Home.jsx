import React from "react";
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import '../../assets/css/@Global.css';
import { PageTitle } from "../../components/@Global/Titles/PageTitle";
import { CardTitle } from "../../components/@Global/Titles/CardTitle";
import { MainCard } from "../../components/@Global/Cards/MainCard";
import { InfosTitles } from "../../components/@Global/Titles/InfosTitles";
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official'

export const Home = () => {
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
                            <InfosTitles title="Clientes" quantity="500" />                            
                            <InfosTitles title="Produtos" quantity="500" />                            
                            <InfosTitles title="Qualidade" quantity="500" />                            
                        </div>
                    </div>
                </MainCard>
            </div>
        </div>
    );
}