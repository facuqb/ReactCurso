
export const Quotes = ({quote,author}) => {
  return (
    <blockquote 
    className="blockquote text-end"
    style={{display: 'flex'}}>
    <p className="mb-2"> {quote}</p>
    <footer className="blockquote-footer"> {author}</footer>

</blockquote>
  )
}
