import React, { useState } from 'react';
import { UseGetGists } from '../hooks/use-get-gists';
import { Loader } from './components/loader/loader';
import { SearchResults } from './components/search-results/search-results';

export function SearchUsers() {
  const [username, setUserName] = useState('');
  const { gists, isError, isLoading, isLoadingPage, isFinishedOnce, mayHaveMoreData, getNextPage } = UseGetGists(
    username
  );
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
  };

  return (
    <>
      <div>
        <input
          className='search-input'
          placeholder='Start typing to search'
          type='text'
          value={username}
          onChange={handleOnChange}
        />
      </div>

      {!isFinishedOnce && isLoading && <Loader />}

      {isFinishedOnce && (
        <div key={isLoading}>
          <SearchResults
            isLoading={isLoading}
            isError={isError}
            gists={gists}
            isLoadingPage={isLoadingPage}
            getNextPage={getNextPage}
            mayHaveMoreData={mayHaveMoreData}
          />
        </div>
      )}
    </>
  );
}
