//  axios config
import axios from "axios";
import { toast } from "react-toastify";

// pishfarz header baraye post
axios.defaults.headers.post["Content-Type"] = "application/json";

// javabi ke az samte server miado tahlil mikone
/*
    200 : ok
    201 : created
    202 : accepted
    218 : this is fine
    */
axios.interceptors.response.use(null, (error) => {
     const expectedErrors =
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500;

     // errori ke entezaresho nadarim:
     if (!expectedErrors) {
          console.log(error);
          toast.error("مشکلی در سرور وجود دارد.", {
               position: "top-center",
               closeOnClick: true,
          });
     }

     return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
     post: axios.post,
     get: axios.get,
     put: axios.put,
     delete: axios.delete,
};
