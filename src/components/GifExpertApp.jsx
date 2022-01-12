import React,{useState} from 'react'
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {


    //const categories = ["Naruto", "DBZ", "7ds"]
    const [categories, setCategories] = useState(["Naruto"])


//    const handleAdd = () =>{
//         setCategories(['Black Clover',...categories]);
//     }

    return (
        <div>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />
            <ol>
                {
                    categories.map((item, index) => (
                        <GifGrid key={item} category={item}></GifGrid>
                    ))
                }
            </ol>

        </div>
    )
}
