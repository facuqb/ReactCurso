import { useCounter,useFetch } from "../Hooks";
import { Quotes, LoadingQuotes } from "../03-examples/components";



export const Layout = () => {
        const {incrementar, counter } = useCounter(1)
        const {data,hasError,isLoading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
        const {quote,author} = !!data && data[0];
        console.log(counter)

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
            (isLoading)
            ? <LoadingQuotes />
            : <Quotes quote= { quote } author = { author } />
        }
        <button className="btn btn-primary" 
        onClick={() => incrementar()}
        disabled={isLoading}
        >
            Next Quote
        </button>


    </>
  )
}
