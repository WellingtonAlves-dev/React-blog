import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Post from '../components/Post';

import axios from 'axios';

export default () => {
    //ħooks
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const API = "http://localhost:3001/posts";
        axios.get(API)
        .then(res => {
            setPosts(res.data.reverse());
        })
    }, []);

    //js

    const edit = id => {
        alert(id);
    }

    //jsx
    return(
        <div>
            <Header />
            {
                posts.map(post =>
                    <Post edit={false} key={post.id} id={post.id} click={edit} titulo={post.title} autor={post.author} comentarios='0' 
                    data={post.data} desc={post.desc.substr(0, 60)} tags={post.tags} capa={post.capa} />
                )
            }
        </div>
    )
}