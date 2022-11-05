import { useContext } from "react"
import { userContext } from "./Context/UserContext"


export const LoginPage = () => {

    const {usuario,edad} = useContext(userContext)
    console.log(usuario,edad)
    return (
      <>
          <h1>LoginPage</h1>
          <hr />
      </>
    )
  }
  