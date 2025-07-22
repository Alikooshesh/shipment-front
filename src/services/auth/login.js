import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";
import { setToken } from "@/utils/token";

export const login = async ({ userName, password }) => {
  const response = await fetch(
    createUrl("/users/login"),
    createOptions({
      method: "POST",
      body: { userName, password },
    })
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg)
    throw new Error(msg);
  }

  const data = await response.json();
  setToken({ accessToken: data.accessToken });
  return data;
};
