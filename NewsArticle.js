import React from 'react';

function NewsArticle({ article }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const publishedAt = new Date(article.publishedAt).toLocaleDateString(
    undefined,
    options
  );

  return (
    <div className='article'>
      <div className='article__body'>
        <p className='article__published'>{publishedAt}</p>
        <h3 className='article__title'>
          <a href={article.url} rel='noreferrer' target='_blank'>
            {article.title}
          </a>
        </h3>
        <p className='article__desc'>{article.description}</p>
        <p className='article__source'>{article.source.name}</p>
      </div>
    </div>
  );
}

export default NewsArticle;
