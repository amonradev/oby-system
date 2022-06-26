import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SuccessToast = (msg) => {
    return toast.success(msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}