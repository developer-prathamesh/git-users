import React, { useContext, useEffect, useState,createContext } from 'react'
export const API_URL = `https://api.github.com/users`
const AppContext = createContext()
const AppProvider = ({children})=>{
    const [username,setUsername] = useState('');
    const [users,setUsers] = useState([])

    const getUser = async (url)=>{
        await fetch(url,{
            method:'GET'
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(username.length===''){
                console.log("no user");
            }
            setUsers(data)
        })
        .catch(error=>console.log(error))
    }
    useEffect(()=>{
        let timeOut = setTimeout(()=>{
            getUser(`${API_URL}/${username}`)
        },300)
        return ()=>clearTimeout(timeOut)
    },[username])

    return (
        <AppContext.Provider value={{username,setUsername,users}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useGlobalContext}
