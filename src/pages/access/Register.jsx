import '../../assets/css/@Access.css';
import { Input } from "../../components/@Access/Input";
import { SubmitButton } from "../../components/@Access/SubmitButton";
import { SubTitle } from "../../components/@Access/Titles/SubTitle";
import { Title } from "../../components/@Access/Titles/Title";

export const Register = () => {
    return (
        <div className="main__access">
            <div className="card__access">
                <div className="image__access">
                    <img src="src/assets/svg/oby.svg" alt="" />
                </div>
                <Title title="Oby System" />
                <SubTitle title="Digite seu email para solicitar acesso ao sistema" />
                <Input name="Email" />
                <SubmitButton title="Cadastrar email" />
            </div>
        </div>
    );
}