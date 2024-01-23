import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';

const Element = () => {
    const { id } = useParams()
    const product = data.find((p) => p.id === +id)

    return (
        <>
            <h1>{product.nom}</h1>
            <p>{product.price}€</p>
        </>
      );
}
 
export default Element;