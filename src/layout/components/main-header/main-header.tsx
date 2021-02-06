import React from 'react';
import './main-header.scss';

export function MainHeader() {
  return (
    <div className='main-header mb-15'>
      <img src='github.svg' className='logo mr-15' alt='header logo' />
      <div>
        <h1>Github Searcher</h1>
        <p>search user</p>
      </div>
    </div>
  );
}
