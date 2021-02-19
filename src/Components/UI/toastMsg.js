import { toast } from "react-toastify";

const toastConfig = {
     position: "top-center",
     autoClose: 1000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: true,
};

export const toastSuccess = (message) => {
     toast.success(message, toastConfig);
};

export const toastError = (message) => {
     toast.error(message, toastConfig);
};

export const toastWarning = (message) => {
     toast.warning(message, toastConfig);
};
