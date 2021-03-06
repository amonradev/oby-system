import './titles.css';
import React from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { api } from "../../../api/paths";
import { ErrorToast } from "../../../utils/Global/ErrorToast";
import { SuccessToast } from "../../../utils/Global/SuccessToast";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../Table/actionsModal.css';

export const CardTitleWithButton = ({title, type}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        const path = `${api}/${type == 'products' ? 'products' : 'clients'}`;
   
        axios({
            url: path,
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
        <div className='div__title__button'>
            <h2 className='card__title'>{title}</h2>
            <Popup
                trigger={<FontAwesomeIcon className="new__register" icon={faPlus} />}
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
                            <label htmlFor="Descri????o" className="label__input__access">Descri????o</label>
                            <input type="text" name="Descri????o" placeholder="Descri????o" className="input__access" {...register("description", { required: true })} />
                        </div>
                        :
                        <div className="div__input__access">
                            <label htmlFor="Quantidade" className="label__input__access">QTD</label>
                            <input type="text" name="Quantidade" placeholder="Quantidade" className="input__access" {...register("quantity", { required: true })} />
                        </div>
                        }
                        {type == 'products' && 
                        <div className="div__input__access">
                            <label htmlFor="Pre??o" className="label__input__access">Pre??o</label>
                            <input type="text" name="Pre??o" placeholder="Pre??o" className="input__access" {...register("price", { required: true })} />
                        </div>
                        }

                        {type == 'clients' ?
                        <div className="div__input__access">
                            <label htmlFor="Satisfa????o" className="label__input__access">Satisfa????o</label>
                            <input type="text" name="Satisfa????o" placeholder="Satisfa????o" className="input__access" {...register("satisfaction", { required: true })} />
                        </div>                        
                        :
                        <div className="div__input__access">
                            <label htmlFor="Solicita????es" className="label__input__access">Solicita????es</label>
                            <input type="text" name="Solicita????es" placeholder="Solicita????es" className="input__access" {...register("requests", { required: true })} />
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