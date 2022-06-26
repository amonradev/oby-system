import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import '../../assets/css/@Access.css';
import { SubmitButton } from "../../components/@Access/SubmitButton";
import { Title } from "../../components/@Access/Titles/Title";
import { onSubmit } from '../../utils/access/onSubmit';
import { ErrorToast } from '../../utils/Global/ErrorToast';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    if(errors.email && errors.password) {
        ErrorToast('Todos os campos são obrigatórios!');
    } else if(errors.email) {
        ErrorToast('O campo de email é obrigatório!');
    } else if(errors.password) {
        ErrorToast('O campo de senha é obrigatório!');
    } 
    return (
        <div className="main__access">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <div className="card__access">
                <div className="image__access">
                    <img src="src/assets/svg/oby.svg" alt="" />
                </div>
                <Title title="Oby System" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div__input__access">
                        <label htmlFor="Email" className="label__input__access">Email</label>
                        <input type="email" name="Email" placeholder="Email" className="input__access" {...register("email", {required: true})} />
                    </div>
                    <div className="div__input__access">
                        <label htmlFor="senha" className="label__input__access">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" className="input__access" {...register("password", {required: true})} />
                    </div>
                    <SubmitButton title="Entrar:" />
                </form>
            </div>
        </div>
    );
}