import React, { Fragment, useState } from 'react'

import { AddCategory } from './components/AddCategory'
import { GifComponent } from './components/GifComponent';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Radiohead']);

    // const handleAdd = () => {
    //     setCategories( (categories) => [...categories, 'Mac Demarco']);
    // }

    return (
        <Fragment>
            <h2>GIF App</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => {
                        return <GifComponent key={category} category={category} />
                    })
                }
            </ol>
        </Fragment>

    )
}

