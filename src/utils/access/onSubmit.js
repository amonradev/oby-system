import axios from "axios"
import { useHref, useNavigate } from "react-router-dom";
import { api } from "../../api/paths"
import { ErrorToast } from "../Global/ErrorToast";
import { SuccessToast } from "../Global/SuccessToast";

export const onSubmit = (data) => {
    axios({
        url: `${api}/login`,
        method: 'POST',
        data
    }).then(res => {
        if(res && res.data && res.data == 1) {
            SuccessToast('Sucesso! Login efetuado com sucesso!')
            sessionStorage.setItem('isLogged', true)
            window.location.href = "/pagina-inicial"
        } else {
            ErrorToast('Ops... Aconteceu um erro!')
        }
    }).catch(err => {
        console.log(err);
        ErrorToast('Ops... Aconteceu um erro!');
    })
}