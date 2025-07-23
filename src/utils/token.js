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

export const getUserRank = ()=>{
    const isAdmin = localStorage.getItem("isAdmin");
    if(isAdmin){
        return isAdmin === "true";
    }

    return null;
}

export const setUserRank = ({isAdmin})=>{
    localStorage.setItem("isAdmin" , String(isAdmin))
}

export const logout = ()=>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("isAdmin")
}