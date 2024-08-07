import React, { useEffect, useState } from 'react';
import Article from './Article';
import { fetchArticles } from '../services/api';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articles = await fetchArticles();
        setArticles(articles);
      } catch (error) {
        setError(error.message);
      }
    };

    getArticles();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article
          key={article._id}
          title={article.title}
          author={article.author}
          description={article.description}
          imageUrl={article.urlToImage}
        />
      ))}
    </div>
  );
};

export default ArticleList;
