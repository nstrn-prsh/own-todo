import { toast } from "react-toastify";

const toastConfig = {
     position: "top-center",
     closeOnClick: false,
     closeButton: true,
     autoClose: 2000,
};

export const toastSuccess = (message) => {
     toast.success(message, toastConfig);
};

export const toastError = (message) => {
     toast.error(message, toastConfig);
};

export const toastWarning= (message) => {
     toast.warning(message, toastConfig);
};
