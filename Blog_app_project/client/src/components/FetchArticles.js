import axios from 'axios';
import { useState,useEffect } from 'react';
import './styles.css';

function FetchArticles(){
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
       fetch();
    },[])
    const fetch=async()=>{
        let data = await axios.get('http://localhost:8080/article');
        data = data.data;
        setArticles(data);
    }
    const deleteArticle=async(id)=>{
       await axios.delete('http://localhost:8080/article/'+id);
       fetch();
    }
    return(
        <div className='all-article'>
            {
                articles.map((art,index)=>{
                    return(
                        <div className='article'>
                            <div>{art.title}, {art.category}</div>
                            
                            <div>{art.descriptions}</div>
                            
                            <div>
                                <button 
                                onClick={deleteArticle}
                                style={{backgroundColor:"red"}}>Delete</button>
                                <button style={{backgroundColor:"blue",color:"white"}}>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default FetchArticles;