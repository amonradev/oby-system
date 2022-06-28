import '../../assets/css/@Global.css';
import { ConfigButtons } from '../../components/@Global/Buttons/ConfigButtons';
import { MainCard } from '../../components/@Global/Cards/MainCard';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import { CardTitle } from '../../components/@Global/Titles/CardTitle';
import { PageTitle } from '../../components/@Global/Titles/PageTitle';
import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { api } from '../../api/paths';
import { ErrorToast } from '../../utils/Global/ErrorToast';
import { SuccessToast } from '../../utils/Global/SuccessToast';
import { Link } from "react-router-dom";

export const Configs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
   
        axios({
            url: `${api}/users`,
            method: 'POST',
            data
        }).then(res => {
            SuccessToast('Sucesso! Registro salvo com sucesso!')
            setTimeout(() => {
                window.location.reload(true);
            }, "1500")
        }).catch(err => {
            console.log(err);
            ErrorToast('Ops... Aconteceu um erro!');
        })
    }
    
    return (
        <div className="page">
            <Sidebar active='configs' />
            <div className="page__body">
                <PageTitle title="Configurações" />
                <MainCard>
                    <CardTitle title="Comandos" />
                    <div className="main__content">
                        <div className="grid__buttons">
                        <Popup
                                trigger={<button className="config">Cadastrar novo usuário</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"> Editar Registro </div>
                                    <form onSubmit={handleSubmit(submit)}>
                                    <div className="content">
                                    {' '}
                                        <div className="div__input__access">
                                            <label htmlFor="Email" className="label__input__access">Nome</label>
                                            <input type="email" name="Email" placeholder="Email" className="input__access" {...register("email", { required: true })} />
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="button"
                                            onClick={() => {
                                            close();
                                            }}
                                        >
                                            Fechar
                                        </button>
                                        <button type="submit">
                                            AKAK
                                        </button>
                                    </div>
                                    </form>
                                </div>
                                )}
                            </Popup>         
                        <Popup
                                trigger={<button className="config">Excluir usuário</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"> Editar Registro </div>
                                    <form onSubmit={handleSubmit(submit)}>
                                    <div className="content">
                                    {' '}
                                        <div className="div__input__access">
                                            <label htmlFor="Email" className="label__input__access">Nome</label>
                                            <input type="email" name="Email" placeholder="Email" className="input__access" {...register("email", { required: true })} />
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="button"
                                            onClick={() => {
                                            close();
                                            }}
                                        >
                                            Fechar
                                        </button>
                                        <button type="submit">
                                            AKAK
                                        </button>
                                    </div>
                                    </form>
                                </div>
                                )}
                            </Popup>         
                            <ConfigButtons name="Contatar o suporte" />
                            <Link to="/"  className="config link__config">
                                <ConfigButtons name="Sair" />
                            </Link>
                        </div>
                    </div>
                </MainCard>
            </div>
        </div>
    );
}