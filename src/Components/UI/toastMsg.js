import { toast } from "react-toastify";

const toastConfig = {
     position: "top-center",
     closeOnClick: true,
     closeButton: true,
     autoClose: 2000,
};

export const toastSuccess = (message) => {
     toast.success(message, toastConfig);
};

export const toastError = (message) => {
     toast.error(message, toastConfig);
};
