import React, { useState } from 'react';
import NewsArticle from 'NewsArticle';
import useFetchNews from 'useFetchNews';
import Searchbar from 'Searchbar';
import Pagination from 'Pagination';
import Loading from 'Loading';
import Error from 'Error';

function News() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { data, loading, error } = useFetchNews(search, page, pageSize);

  return (
    <div className='container'>
      <h1 id='title'>News24 📰</h1>
      <Searchbar setSearch={setSearch} search={search} setPage={setPage} />

      {!loading && !error && data.totalResults > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalResults={data.totalResults}
          pageSize={pageSize}
        />
      )}

      {!loading && !error && data.totalResults === 0 && (
        <div id='not__found'>
          <h1>Sorry no results found</h1>
          <p>
            <strong> Try searching with different keywords </strong>
          </p>
        </div>
      )}

      {loading && <Loading />}

      {error && <Error error={error} />}

      <div className='all__news'>
        {data.articles &&
          data.articles.map((article) => (
            <NewsArticle key={article.url} article={article} />
          ))}
      </div>

      {!loading && !error && data.totalResults > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalResults={data.totalResults}
          pageSize={pageSize}
        />
      )}
    </div>
  );
}

export default News;
