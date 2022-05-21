import React from 'react'
import { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifComponent = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h5 className="animate__animated animate__fadeIn">{category}</h5>

            {loading && <p>Cargando...</p>}

            <div className="card-grid">
                {
                    images.map((img) => {
                        return <GifItem key={img.id} {...img} />
                    })
                }
            </div>
        </Fragment>
    )
}
