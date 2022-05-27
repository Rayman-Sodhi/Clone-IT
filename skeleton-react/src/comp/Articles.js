import React, {useState} from 'react'
import { useEffect } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

function Articles() {
    const [article,setArticle] = useState(null);

    useEffect(() =>{
        setTimeout( async () => {
            const res= await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setArticle(data);
      },5000)
    })

  return (
    <div className="articles">
    <h2>Articles</h2>


    {article && article.map(article => (
        <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </div>
    ))}
       {!article && [1,2,3,4,5].map((n) => <SkeletonArticle theme="dark" key={n} />)}  

    </div>
  )
}

export default Articles