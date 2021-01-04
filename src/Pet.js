import React from 'react';
import {Link} from '@reach/router'

export default function Pet({ name, animal, breed, media, location, id }) {
    
    let placeHolderImage = 'http://placeorgi.com/300/300';
    if(media.length){
        placeHolderImage = media[0].small;
    }

    return (
        <Link to={`/details/${id}`} className = "pet">
            <div className="image-container">
                <img src={placeHolderImage} alt={name}/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </Link>
    )
};