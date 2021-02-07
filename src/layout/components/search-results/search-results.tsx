import React, { useState, useEffect } from 'react';
import { UserCard } from '../user-card/user-card';
import { ApiResponse } from '../../../api/api.types';
import { GistCard } from '../gist-card/gist-card';
import './search-results.scss';
import { NoResult } from '../no-results/no-results';
import { ErrorPage } from '../error/error';
import { Loader } from '../loader/loader';

type SearchResultsProps = {
  isLoading: boolean;
  isError: boolean;
  gists: ApiResponse['data'];
  isLoadingPage: boolean;
  mayHaveMoreData: boolean;
  getNextPage: (page: number) => void;
};
export function SearchResults(props: SearchResultsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, isError, isLoadingPage, gists = [], getNextPage, mayHaveMoreData } = props;

  const handleNextPage = async () => {
    setCurrentPage((val: number) => val + 1);
  };

  useEffect(() => {
    if (currentPage === 1) return null;
    getNextPage(currentPage);
  }, [currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!gists.length) {
    return <NoResult />;
  }

  return (
    <div>
      <div className='mb-15'>
        <UserCard
          avatar={gists[0]?.owner?.avatar_url}
          gitHubLink={gists[0]?.owner?.html_url}
          userName={gists[0]?.owner?.login}
          numberOfGists={gists.length}
        />
      </div>
      <div className='gists-list'>
        {gists.map((card) => (
          <div className='gist-card' key={card.id}>
            <GistCard card={card} />
          </div>
        ))}
      </div>
      {mayHaveMoreData && (
        <div className='centered-container mt-15'>
          <button className='load-more-button' onClick={handleNextPage} disabled={isLoadingPage}>
            {isLoadingPage ? <div className='loader'></div> : 'LOAD MORE'}
          </button>
        </div>
      )}
    </div>
  );
}
