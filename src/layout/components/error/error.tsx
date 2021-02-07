import React from 'react';
import './error.scss';

export function ErrorPage() {
  return (
    <div className='error-page'>
      <img src='attention.png' alt='404' />
      <p>Ooops! Something went wrong.</p>
    </div>
  );
}
