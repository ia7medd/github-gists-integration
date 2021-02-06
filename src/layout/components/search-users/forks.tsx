import React, { useEffect, useState } from 'react';
import { ForksApiResponse } from '../../../api/api.types';
import './forks.scss';

export function Forks({ forks }: { forks: ForksApiResponse[] }) {
  if (!forks.length) {
    return <div className='no-forks-list'>No forks </div>;
  }

  return (
    <div className='forks-list'>
      <h4>Forks List</h4>
      {forks.slice(0, 3).map((ele) => (
        <div className='one-fork' key={ele.id}>
          <img src={ele.owner.avatar_url} alt={ele.owner.login} />
          <div class='fork-user-details'>
            <div>{ele.owner.login}</div>
            <div>user type: {ele.owner.type}</div>
          </div>
          <a href={ele.owner.html_url} className='main-button dark'>
            follow user
          </a>
        </div>
      ))}
    </div>
  );
}
