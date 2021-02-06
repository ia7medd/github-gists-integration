import React from 'react';
import { UserCard } from '../user-card/user-card';
import { ApiResponse } from '../../../api/api.types';
import { GistCard } from './gist-card';
import './search-results.scss';
import { NoResult } from './no-results';
import { ErrorPage } from '../error/error';

type SearchResultsProps = {
  isLoading: boolean;
  isError: boolean;
  gists: ApiResponse['data'];
};
export function SearchResults(props: SearchResultsProps) {
  const { isLoading, isError, gists = [] } = props;

  if (isLoading) {
    return <div>...loading</div>;
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
    </div>
  );
}
