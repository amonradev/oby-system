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
        console.log(data)
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
                    Você realmente deseja apagar esse registro?
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
                        <button onClick={() => deleteItem(id, type)}>
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
                            <label htmlFor="Email" className="label__input__access">Nome</label>
                            <input type="email" name="Email" placeholder="Email" className="input__access" {...register("email", { required: true })} />
                        </div>
                        {type == 'clients' ?
                        <div className="div__input__access">
                            <label htmlFor="senha" className="label__input__access">Problema</label>
                            <input type="password" name="senha" placeholder="Senha" className="input__access" {...register("password", { required: true })} />
                        </div>
                        :
                        <div className="div__input__access">
                            <label htmlFor="senha" className="label__input__access">QTD</label>
                            <input type="password" name="senha" placeholder="Senha" className="input__access" {...register("password", { required: true })} />
                        </div>
                        }
                        {type == 'products' && 
                        <div className="div__input__access">
                            <label htmlFor="senha" className="label__input__access">Preço</label>
                            <input type="password" name="senha" placeholder="Senha" className="input__access" {...register("password", { required: true })} />
                        </div>
                        }

                        {type == 'clients' ?
                        <div className="div__input__access">
                            <label htmlFor="senha" className="label__input__access">Satisfação</label>
                            <input type="password" name="senha" placeholder="Senha" className="input__access" {...register("password", { required: true })} />
                        </div>                        
                        :
                        <div className="div__input__access">
                            <label htmlFor="senha" className="label__input__access">Solicitações</label>
                            <input type="password" name="senha" placeholder="Senha" className="input__access" {...register("password", { required: true })} />
                        </div>
                        }
                    </div>
                    <div className="actions">
                        <button
                            className="submit"
                            onClick={() => {
                            close();
                            }}
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