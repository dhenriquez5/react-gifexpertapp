import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem'


export const GifGrid = ({ category }) => {

    const {data,loading} = useFetchGifs(category);
    console.log(data);

    

    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && 'Cargando...'}
            <div className="card-grid">
                <ol>
                    {
                        data.map(img =>
                        (<GifGridItem
                            key={img.id}
                            img={img}>
                        </GifGridItem>)
                        )
                    }
                </ol>
            </div>
        </>
    )
}
