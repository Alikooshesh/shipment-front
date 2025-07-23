import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const getAllUsers = async () => {
  const response = await fetch(createUrl("/admin/users") , createOptions({}));

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg);
    throw new Error(msg);
  }

  const data = await response.json();
  return data.map(i => ({...i , id : i._id}));
};

export const getUserData = async ({id}) => {
    const response = await fetch(createUrl(`/admin/users/${id}`) , createOptions({}));
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg = errorData.message || "Login failed";
      toastError(msg);
      throw new Error(msg);
    }
  
    const data = await response.json();
    return {...data , id : data._id};
  };

export const createNewUser = async ({ body }) => {
  const response = await fetch(
    createUrl("/admin/users"),
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

export const updateUser = async ({ id, body }) => {
  const response = await fetch(
    createUrl(`/admin/users/${id}`),
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
