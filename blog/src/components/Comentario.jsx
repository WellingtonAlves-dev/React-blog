import React from 'react';
import './comentarios.css';

export default props => {
    return(
        <div className='comentarios'>
            <p>{props.comentario}</p>
        </div>
    )
}