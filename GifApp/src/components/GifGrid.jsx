import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ({category}) => {
    
    const [image, setImage] = useState([])
    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImage(newImages)
    }
    useEffect(() => {
        getImages()
    }, [] )
    
    return (
        <>
        <h3>{category}</h3>
        <div className="d-flex">
            {image.map( img => (
                <GifItem key={img.id}
                {...img}
                 />
        
            ) )}
        </div>
           
    
        
    
        </>
  )
}
