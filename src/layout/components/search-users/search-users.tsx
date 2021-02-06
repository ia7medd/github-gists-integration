import React, { useState, useCallback } from 'react';
import { SearchResults } from './search-results';
import { UseGetGists } from './hooks/use-get-gists';

export function SearchUsers() {
  const [username, setUserName] = useState('');
  const { gists, isError, isLoading, isFinishedOnce, debouncedRequest } = UseGetGists();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      debouncedRequest(value);
    }
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
      {isFinishedOnce && <SearchResults isLoading={isLoading} isError={isError} gists={gists} />}
    </>
  );
}
