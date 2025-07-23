import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const getProfile = async () => {
  const response = await fetch(
    createUrl("/users/me"),
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

export const updateProfile = async ({body}) => {
    const response = await fetch(
      createUrl("/users/me"),
      createOptions({
        body,
        method : "PUT",
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
