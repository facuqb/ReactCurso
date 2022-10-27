import React from 'react'

export const GifItem = ({title,url}) => {
  return (

    <div className="card mx-4" style={{width: "18rem"}}>
        <img src={url} className="card-img-top" alt="{title}"  />
            <div className="card-body">
            <p className="card-text">{title}</p>
        </div>
    </div>
    // <>
    //     <p >{title}</p>
    //     <img src= {url} />
    // </>
  )
}
