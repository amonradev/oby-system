import React from "react";
import '../../assets/css/@Access.css';
import { Input } from "../../components/@Access/Input";
import { SubmitButton } from "../../components/@Access/SubmitButton";
import { Title } from "../../components/@Access/Titles/Title";

export const Login = () => {
    return (
        <div className="main__access">
            <div className="card__access">
                <div className="image__access">
                    <img src="src/assets/svg/oby.svg" alt="" />
                </div>
                <Title title="Oby System" />
                <Input name="Email" />
                <Input name="Senha" />
                <SubmitButton title="Entrar" />
            </div>
        </div>
    )
}