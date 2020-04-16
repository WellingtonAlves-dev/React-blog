import React, { useState } from 'react';
import Post from '../components/Post';
import './Admin.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
export default () => {
    //hooks

    const [titulo, setTitulo] = useState(' ');
    const [autor, setAutor] = useState(' ');
    const [data, setData] = useState(' ');
    const [url, setUrl] = useState(' ');
    const [tags, setTags] = useState([]);
    const [desc, setDesc] = useState();
    const [redirect, setRedirect] = useState(false);
    //js

    const validateTag = (tag_value) => {
        setTags(tag_value.split(" "));
    }

    const postar = e => {
        axios.post("http://localhost:3001/posts", {
            'id': Date.now(),
            "title": titulo,
            "author": autor,
            "data": data,
            "capa": url,
            "desc": desc,
            "tags": tags
        }).then(res => setRedirect(true))
        .catch(err => alert(err));

        e.preventDefault();
    }

    //jsx
    if(redirect) return <Redirect push to="/"/>
    return(
        <div>
            <form className='formulario' onSubmit={e => postar(e)}>
                <input type='text' placeholder='Titulo' onChange={e => setTitulo(e.target.value)}/>
                <input type='text' placeholder='Autor' onChange={e => setAutor(e.target.value)}/>
                <input type='date' placeholder='Data' onChange={e => setData(e.target.value)}/>
                <input type='url' placeholder='url imagem' onChange={e => setUrl(e.target.value)}/>
                <input type='text' placeholder='tags' onBlur={e => validateTag(e.target.value)}/>
                <textarea placeholder='desc' onChange={e => setDesc(e.target.value)} />
                <button type='submit'>Postar</button>
            </form>
            <h1>Template</h1>

            <Post tags={tags} capa={url} comentarios='0' desc={desc} autor={autor} titulo={titulo} data={data}/>

        </div>
    )
}