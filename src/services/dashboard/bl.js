import { isSameDay } from "@/utils/date";
import { createOptions, createUrl } from "@/utils/fetch";
import { toastError } from "@/utils/toast";

export const getAllBl = async ({filter,date} = {}) => {
  console.log({date})
  let url = "/records/bl";
  if(filter){
    url = url + "?" + filter
  }
  const response = await fetch(createUrl(url) , createOptions({}));

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.message || "Login failed";
    toastError(msg);
    throw new Error(msg);
  }

  const data = await response.json();
  
  if(date){
    return data.records.filter(item => isSameDay(item.registerDate, date));
  }

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
