import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadMore , setLoadMore] = useState(20);

  const newsApi = async() => {
    try{
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`

      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);

    } catch (error)
    {
      console.log(error);
    }
  };

  console.log(newsArray);

  useEffect(() => {
    newsApi();
  }, [newsResult,category,loadMore]);

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} />

      <NewsContent
           setLoadMore={setLoadMore}
           loadMore={loadMore}
           newsArray={newsArray}
           newsResult={newsResult}
           />
       <Footer />
    </div>
  );
}

export default App;
