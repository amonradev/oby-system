import React from "react";
import {faCircleXmark, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './actionsModal.css';

export const Actions = ({id}) => {

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
                        <button>
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