import React, {useState, createContext, useContext} from "react"

 const br=['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']

const BootstrapContext = createContext()

export const useBootstrap = ()=>{
    return useContext(BootstrapContext)
}

export const BootstrapProvider = ({children})=>{
    const [breakpoints, setBreakpoints] = useState([...br])

    return(
        <BootstrapContext.Provider value={{breakpoints, setBreakpoints}}>
            {children}
        </BootstrapContext.Provider>
    )
}