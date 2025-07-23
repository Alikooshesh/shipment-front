import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const createDocument = async ({data}) => {
  const response = await fetch(
    createUrl("/records/document"),
    createOptions({
        body : data,
        method : "POST"
    })
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg)
    throw new Error(msg);
  }

  const data = await response.json();
  return data;
};

export const getAllDocuments = async () => {
    const response = await fetch(
        createUrl("/records/document"),
        createOptions({})
    );
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg = errorData.message || "Login failed";
      toastError(msg)
      throw new Error(msg);
    }
  
    const data = await response.json();
    return data;
  };

  export const getActiveDocuments = async () => {
    const response = await fetch(
        createUrl("/records/document"),
        createOptions({})
    );
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg = errorData.message || "Login failed";
      toastError(msg)
      throw new Error(msg);
    }
  
    const data = await response.json();
    return data.filter(i => i.isActive);
  };

  export const deleteDocument = async ({id}) => {
    const response = await fetch(
        createUrl(`/records/document/${id}`),
        createOptions({
            method : "DELETE"
        })
    );
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg = errorData.message || "Login failed";
      toastError(msg)
      throw new Error(msg);
    }
  
    const data = await response.json();
    return data;
  };