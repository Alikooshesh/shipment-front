export const getToken = ()=>{
    const token = localStorage.getItem("accessToken");
    if(token){
        return token;
    }

    return null;
}

export const setToken = ({accessToken})=>{
    localStorage.setItem("accessToken" , accessToken)
}

export const logout = ()=>{
    localStorage.removeItem("accessToken")
}