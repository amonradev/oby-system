import React from "react";
import {faCircleXmark, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './actionsModal.css';
import { api } from "../../../api/paths";
import { ErrorToast } from "../../../utils/Global/ErrorToast";
import axios from 'axios';

export const Actions = ({id, type}) => {

    const deleteItem = (id, type) => {
        const path = `${api}/${type == 'products' ? 'products' : 'clients'}`;

        console.log(path)
        axios({
            url: path,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
                id
            }
        }).then(res => {
            console.log(res);
            SuccessToast('Sucesso! Registro apagado com sucesso!')
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
                    <div className="content">
                    {' '}

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
                        <button>
                            Salvar
                        </button>
                    </div>
                </div>
                )}
            </Popup>         
        </div>
    )
}