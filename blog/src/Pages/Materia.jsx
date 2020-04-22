import React, {useEffect, useState} from 'react';
import Post from '../components/Post';
import axios from 'axios';
import Comentario from '../components/Comentario';
import './Materia.css';

export default props => {

    const [post, setPost] = useState({}); 
    const [comentarios, setComentarios] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        axios.get("http://localhost:3001/posts/"+props.match.params.id)
        .then(res => {
            setComentarios(res.data.comentarios.sort())
            setPost(res.data)
        })
    }, []);

    const comentar = e => {
        const object = {"id": Date.now(), "comentario": input};

        setComentarios([...comentarios, object]);

        axios.patch("http://localhost:3001/posts/"+props.match.params.id, {
            "comentarios": [...comentarios, object]
        })
        e.preventDefault();
    }

    return(
        <div>
            <Post desc={post.desc} tags={post.tags} titulo={post.title} autor={post.author} comentarios={comentarios.length} data={post.data} capa={post.capa} />
            <div className='divComentarios'>
                <div className="input-group-comentario">
                    <input type='text' placeholder="comentario" value={input} onChange={e => setInput(e.target.value)} />
                    <button onClick={e => comentar(e)}>Comentar</button>
                </div>
                {
                    comentarios.map(comentario => {
                        return(
                        <Comentario comentario={comentario.comentario}></Comentario>
                        )
                    })
                }
            </div>
        </div>
    )
}