import React from "react";
import {faCircleXmark, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './actionsModal.css';
import { api } from "../../../api/paths";
import { ErrorToast } from "../../../utils/Global/ErrorToast";
import { SuccessToast } from "../../../utils/Global/SuccessToast";
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const Actions = ({id, type}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        const path = `${api}/${type == 'products' ? 'products' : 'clients'}/${id}`;
        
        axios({
            url: path,
            method: 'PUT',
            data: {...data, id}
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

    const deleteItem = (id, type) => {
        const path = `${api}/${type == 'products' ? 'products' : 'clients'}/${id}`;

        axios({
            url: path,
            method: 'DELETE',
        }).then(res => {
            SuccessToast('Sucesso! Registro apagado com sucesso!')
            setTimeout(() => {
                window.location.reload(true);
            }, "1500")
        }).catch(err => {
            console.log(err);
            ErrorToast('Ops... Aconteceu um erro!');
        })
    }
    return (
        <div className="actions">
            <Popup
                trigger={<FontAwesomeIcon className="actions__delete" icon={faCircleXmark} />}
                modal
                nested
            >
                {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="header"> Apagar Registro </div>
                    <div className="content">
                    {' '}
                    <h1>
                        Você realmente deseja apagar esse registro?
                    </h1>
                    </div>
                    <div className="actions">
                        <button
                            className="close"
                            onClick={() => {
                            close();
                            }}
                        >
                            Fechar
                        </button>
                        <button className="button" onClick={() => deleteItem(id, type)}>
                            Excluir
                        </button>
                    </div>
                </div>
                )}
            </Popup>         

            <Popup
                trigger={<FontAwesomeIcon className="actions__edit" icon={faPenToSquare} />}
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
                            <label htmlFor="Nome" className="label__input__access">Nome</label>
                            <input type="text" name="Nome" placeholder="Nome" className="input__access" {...register("name", { required: true })} />
                        </div>
                        {type == 'clients' ?
                        <div className="div__input__access">
                            <label htmlFor="Descrição" className="label__input__access">Descrição</label>
                            <input type="text" name="Descrição" placeholder="Descrição" className="input__access" {...register("description", { required: true })} />
                        </div>
                        :
                        <div className="div__input__access">
                            <label htmlFor="Quantidade" className="label__input__access">QTD</label>
                            <input type="text" name="Quantidade" placeholder="Quantidade" className="input__access" {...register("quantity", { required: true })} />
                        </div>
                        }
                        {type == 'products' && 
                        <div className="div__input__access">
                            <label htmlFor="Preço" className="label__input__access">Preço</label>
                            <input type="text" name="Preço" placeholder="Preço" className="input__access" {...register("price", { required: true })} />
                        </div>
                        }

                        {type == 'clients' ?
                        <div className="div__input__access">
                            <label htmlFor="Satisfação" className="label__input__access">Satisfação</label>
                            <input type="text" name="Satisfação" placeholder="Satisfação" className="input__access" {...register("satisfaction", { required: true })} />
                        </div>                        
                        :
                        <div className="div__input__access">
                            <label htmlFor="Solicitações" className="label__input__access">Solicitações</label>
                            <input type="text" name="Solicitações" placeholder="Solicitações" className="input__access" {...register("requests", { required: true })} />
                        </div>
                        }
                    </div>
                    <div className="actions">
                        <button
                            className="submit"
                            type="submit"
                        >
                            Salvar
                        </button>
                        <button type="button" className="button">
                            Fechar
                        </button>
                    </div>
                    </form>
                </div>
                )}
            </Popup>         
        </div>
    )
}