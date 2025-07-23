import { getToken } from "./token";

export const createOptions = ({
  shouldSetToken = true,
  shouldSetApiKey = true,
  contentType = "application/json",
  method = "GET",
  body
}) => {
  const headers = {};

  headers["Content-Type"] = contentType;

  if(shouldSetApiKey){
    headers["api_key"] = process.env.NEXT_PUBLIC_API_KEY;
  }
  

  if (shouldSetToken) {
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  if(body){
    body = JSON.stringify(body)
  }

  return {
    method , 
    headers ,
    body
  };
};


export const createUrl = (url)=>{
    return process.env.NEXT_PUBLIC_BASE_API + url
}