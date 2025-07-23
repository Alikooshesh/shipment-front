import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const uploadImage = async ({ file }) => {
  const fd = new FormData();

  fd.append("image", file);
    const ops = createOptions({})
  const response = await fetch(createUrl("/users/login"), {...ops , body : fd});

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg);
    throw new Error(msg);
  }

  const data = await response.json();
  return data.downloadLink;
};


export const getFileUrl = (address)=>{
    return process.env.NEXT_PUBLIC_BASE_API + "/assets/uploads/" + address
}