import React from 'react'
import { createContext, useContext, useState } from 'react'
import { toast } from "react-toastify";

const context = createContext(null)

export const useGlobalContext = () => useContext(context);

const ContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(false)

    const postNotify = () => toast.success('House posted successfully');
    const postNotifyError = () => toast.error('Error, Something went wrong!!, Fill out the inputs Correctly');
    
    const value = {
        postNotify,
        postNotifyError,
        setLoader,
        loader
    }
    return <context.Provider value={value}>{children}</context.Provider>;
}

export default ContextProvider
