import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const createDocument = async ({body}) => {
  const response = await fetch(
    createUrl("/records/document"),
    createOptions({
        body,
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
    return data.records;
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
    return data.records.filter(i => i.isActive);
  };

  export const updateDocument = async ({id , body}) => {
    const response = await fetch(
        createUrl(`/records/document/${id}`),
        createOptions({
            method : "PUT",
            body
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