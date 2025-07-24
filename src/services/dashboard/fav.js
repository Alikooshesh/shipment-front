import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const getFavList = async ({favType}) => {
  const response = await fetch(
    createUrl(`/records/fav?filterKey=favType&filterValue=${favType}`),
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

export const createNewFav = async ({body}) => {
    const response = await fetch(
      createUrl("/records/fav"),
      createOptions({
        body,
        method : "POST",
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


  export const deleteFav = async ({id}) => {
    const response = await fetch(
      createUrl(`/records/fav/${id}`),
      createOptions({
        method : "DELETE",
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