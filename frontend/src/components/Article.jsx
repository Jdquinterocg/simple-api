import React from 'react';
import '../styles/Article.css';

const Article = ({ title, author, description, imageUrl }) => (
  <div className="article">
    <div className="article-image">
        <img src={imageUrl} alt="" />
    </div>
    <div className="article-content">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default Article;
