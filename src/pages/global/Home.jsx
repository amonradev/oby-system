import React from "react";
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import '../../assets/css/@Global.css';
import { PageTitle } from "../../components/@Global/Titles/PageTitle";
import { CardTitle } from "../../components/@Global/Titles/CardTitle";
import { MainCard } from "../../components/@Global/Cards/MainCard";
import {AreaChart, Area, CartesianGrid, XAxis, YAxis} from 'recharts';
import { InfosTitles } from "../../components/@Global/Titles/InfosTitles";

export const Home = () => {
    const dataTest = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
      ];

    return (
        <div className="page">
            <Sidebar active='home' />
            <div className="page__body">
                <PageTitle title="Relatório Geral" />
                <MainCard>
                    <CardTitle title="Gráfico de Atendimentos" />
                    <div className="main__content">
                        <AreaChart width={500} height={300} data={dataTest}>
                            <Area dataKey="students" fill="blue" stroke="blue" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </AreaChart>
                        <div className="right__infos">
                            <InfosTitles title="Title" quantity="500" />                            
                            <InfosTitles title="Title" quantity="500" />                            
                            <InfosTitles title="Title" quantity="500" />                            
                            <InfosTitles title="Title" quantity="500" />                            
                        </div>
                    </div>
                </MainCard>
            </div>
        </div>
    );
}