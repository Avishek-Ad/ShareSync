import React, { useState } from "react";
import { createContext } from "react";
import axiosInstance from "../lib/axios";

export const URLContext = createContext();

const URLProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [urlData, setUrlData] = useState({})
    const shortenURL = async(url) => {
        try {
            const response = await axiosInstance.post("/url", { originalURL:url })
            console.log(response.data)
            setUrlData(response.data)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <URLContext.Provider value={{isLoading, shortenURL, urlData}}>{children}</URLContext.Provider>
    )
}

export default URLProvider