import { userContext } from "./UserContext"


export const UserProvider = ({children}) => {
  return (
    
    <userContext.Provider value={ {usuario: 'facundo' , edad: 33}}>
        {children}
    </userContext.Provider>
  )
}
