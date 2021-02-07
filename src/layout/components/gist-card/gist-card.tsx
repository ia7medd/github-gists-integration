import React from 'react';
import { ApiResponse } from '../../../api/api.types';
import { useGetForksData } from '../../../hooks/use-get-fork-data';
import { Forks } from '../forks-list/forks';
import { Loader } from '../loader/loader';
import './gist-card.scss';

type OneCardType = ApiResponse['data'][0];

type BadgesProps = { files: OneCardType['files'] };
const Badges = ({ files }: BadgesProps) => {
  return (
    <div className='gist-cards'>
      {Object.values(files).map((file, index) => (
        <div className='one-badge mr-5' key={index}>
          {file.type}
        </div>
      ))}
    </div>
  );
};

export function GistCard({ card }: { card: OneCardType }) {
  const { isFinishedOnce, forks, isLoading, getForksData } = useGetForksData(card.forks_url);

  return (
    <>
      <div className='flex-grow-1'>
        <div className='gist-card-description mb-5'>{card.description}</div>
        <div className='gist-card-data-row'> {card.comments} comments</div>
        <Badges files={card.files} />
        {isFinishedOnce && <Forks forks={forks} />}
        {isLoading && (
          <div className='flex-container grey-color'>
            <div className='loader mr-15' />
            Loading forks...
          </div>
        )}
      </div>
      <div className='gist-card-button'>
        <a className='main-button' target='_blank' href={card.html_url}>
          Go to the page
        </a>
        <button className='main-button' onClick={getForksData} disabled={isFinishedOnce || isLoading}>
          Check forks
        </button>
      </div>
    </>
  );
}
