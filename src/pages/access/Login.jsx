import { useForm } from 'react-hook-form';
import '../../assets/css/@Access.css';
import { Input } from "../../components/@Access/Input";
import { SubmitButton } from "../../components/@Access/SubmitButton";
import { Title } from "../../components/@Access/Titles/Title";

export const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);  

    return (
        <div className="main__access">
            <div className="card__access">
                <div className="image__access">
                    <img src="src/assets/svg/oby.svg" alt="" />
                </div>
                <Title title="Oby System" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div__input__access">
                        <label htmlFor="Email" className="label__input__access">Email</label>
                        <input type="email" name="Email" placeholder="Email" className="input__access" {...register("email")} />
                    </div>
                    <div className="div__input__access">
                        <label htmlFor="senha" className="label__input__access">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" className="input__access" {...register("password")} />
                    </div>
                    <SubmitButton title="Entrar" />
                </form>
            </div>
        </div>
    );
}