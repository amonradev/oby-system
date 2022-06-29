import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "../../assets/css/@Access.css";
import { SubmitButton } from "../../components/@Access/SubmitButton";
import { Title } from "../../components/@Access/Titles/Title";
import { onSubmit } from "../../utils/access/onSubmit";
import { ErrorToast } from "../../utils/Global/ErrorToast";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (errors.email && errors.password) {
    ErrorToast("Todos os campos são obrigatórios!");
  } else if (errors.email) {
    ErrorToast("O campo de email é obrigatório!");
  } else if (errors.password) {
    ErrorToast("O campo de senha é obrigatório!");
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
      <div className="card__access card__login">
        <div className="image__access">
            <img src="src/assets/svg/img01.png" alt="" />
        </div>
        <div>
          <Title title="Bem-Vindo!" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="div__input__access">
              <div className="div_inside_acess">
                <label htmlFor="Email" className="label__input__access">
                  Email:
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Digite seu email"
                  className="input__access"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="div__input__access">
                <div className="div_inside_acess">
                <label htmlFor="senha" className="label__input__access">
                Senha:
              </label>
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                className="input__access"
                {...register("password", { required: true })}
              />
                </div>
              
            </div>
            <SubmitButton title="Entrar" />
          </form>
        </div>
      </div>
    </div>
  );
};
