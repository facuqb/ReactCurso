import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    const [categories, setcategory] = useState(["Goku"]);
    const addCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setcategory([newCategory,...categories])
    }
  return (
    <>
    <h1>GiftExpertApp</h1>
    <AddCategory onNewCategory = {addCategory} />
    
        {categories.map(category => (<
          GifGrid 
          key={category} 
          category ={category}
           />))
          }

    </>
  )
}
