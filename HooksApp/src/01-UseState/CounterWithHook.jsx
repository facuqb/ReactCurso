import {useCounter} from "../Hooks/useCounter"

export const CounterWithHook = () => {
    const {counter,disminuir,incrementar,reset} = useCounter();


  return (
    <>
        <h1>Counter With Hooks: {counter}</h1>
        <hr />
        <button onClick={() => incrementar()} className="btn-primary">+1</button>
        <button onClick={reset} className="btn-primary">reset</button>
        <button onClick={() => disminuir()} className="btn-primary">-1</button>

    </>
  )
}
