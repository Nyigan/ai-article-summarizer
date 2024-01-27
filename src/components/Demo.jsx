import React, { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from '../assets';

import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);


const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();
useEffect(() => {
  const articlesFromLocalStorage = JSON.parse (localStorage.getItem('articles'))

  if (articlesFromLocalStorage) {
    setAllArticles(articlesFromLocalStorage)
  }
}, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { data } = await getSummary ({ articleUrl: article.url});
    if (data?.summary) {

      const newArticle = {...article, summary: data.summary};

      const updatedAllArticles = [newArticle, ...allArticles];
      
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      
    }
  }
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form 
        className= "relative flex justify-center items-center" 
        onSubmit={handleSubmit}
        >
          <img 
          src={linkIcon} 
          alt="link_icon"
          className="absolute left-0 my-2 ml-3 w-5" 
          />

          <input
            type="url"
            placeholder="Paste the URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer" // When you need to style an element based on the state of a 
            //sibling element, mark the sibling with the peer class, and use peer-* 
            //modifiers to style the target element
          />

          <button
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700" //here is where peer is modified
          >
            <p>Go</p>
          </button>
        </form>
        {/* Browse URL History */}
      </div>
      {/* Display Results */}
    </section>
  )
}

export default Demo