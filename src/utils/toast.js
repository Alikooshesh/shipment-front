import { Bounce, toast } from "react-toastify"

export const toastError = (text)=>{
    if (typeof window !== "undefined") {
        toast.error(text, {
            position: "top-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      }
}

export const toastSuccess = (text)=>{
    if (typeof window !== "undefined") {
        toast.success(text, {
            position: "top-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      }
}