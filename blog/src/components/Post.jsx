import React from 'react';
import './Post.css'

const Post = props => {
    return(
        <div className='post'>
            <div className='titulo'>
                <h1> {props.titulo ? props.titulo : 'Sem titulo'} {props.edit ? 
                <button onClick={e => props.click(props.id)} >Editar</button> : ''} </h1>
            </div>
            <div className='info'>
                <h4> {props.autor ? props.autor : 'Anonimo'} </h4>
                <h6> {props.comentarios ? props.comentarios : 'Sem'} Comentarios </h6>
                <small> {props.data ? props.data : '00/00/00'} </small>
            </div>
            <div className='capa'>
                <img src={props.capa ? props.capa : 'http://placehold.it/800x600'} />
            </div>
            <div className='descricao'>
                <p>
                    {props.desc}
                </p>
            </div>
            <div className='final'>
                <div class='tags'>
                    {      
                        !props.tags ? (<h6>Sem tag</h6>) :
                        ( 
                            props.tags.map(tag => {
                                return(
                                    <h6>{tag}</h6>
                                )
                            })
                        )
                    }
                    <hr></hr>
                </div>
                <button>Ler mais</button>
            </div>
        </div>
    )
}
export default Post;