import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const getAllBl = async () => {
  const response = await fetch(createUrl("/records/bl") , createOptions({}));

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg);
    throw new Error(msg);
  }

  const data = await response.json();
  return data.records;
};

export const getOneBlData = async ({id}) => {
    const response = await fetch(createUrl(`/records/bl/${id}`) , createOptions({}));
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg = errorData.message || "Login failed";
      toastError(msg);
      throw new Error(msg);
    }
  
    const data = await response.json();
    return data;
  };

export const createNewBl = async ({ body }) => {
  const response = await fetch(
    createUrl("/records/bl"),
    createOptions({
      body: body,
      method: "POST",
    })
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg);
    throw new Error(msg);
  }

  const data = await response.json();
  return data;
};

export const updateBl = async ({ id, body }) => {
  const response = await fetch(
    createUrl(`/records/bl/${id}`),
    createOptions({
      body: body,
      method: "PUT",
    })
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg);
    throw new Error(msg);
  }

  const data = await response.json();
  return data;
};
