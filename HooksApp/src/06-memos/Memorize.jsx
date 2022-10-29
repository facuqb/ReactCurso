import { useState } from "react";
import { useCounter } from "../Hooks"
import { Small } from "./Small";


export const Memorize = () => {
    const {incrementar, counter} = useCounter( 10 );
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter <Small value={counter} /> </h1> 
        <button
            className="btn btn-primary"
            onClick={() => incrementar()}
        >
            +1
        </button>
        <button 
          className=" btn btn-outline-primary"
          onClick={() => setShow(!show)}>
          Show/Hide {JSON.stringify(show)}
        </button>
    
    </>
  )
}
