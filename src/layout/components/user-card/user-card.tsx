import React from 'react';
import './user-card.scss';

type OneRowType = {
  label: string;
  value: React.ReactNode | string;
};
const OneRow = (props: OneRowType) => {
  const { label, value } = props;
  return (
    <div className='user-card-row'>
      <div className='mr-15'>{label}</div>
      <div className='grey-color'>{value}</div>
    </div>
  );
};

type UserCardProps = {
  avatar?: string;
  userName: string;
  gitHubLink: string;
  numberOfGists: number;
};

export function UserCard(props: UserCardProps) {
  const { avatar = 'default-user-image.png', userName, gitHubLink, numberOfGists } = props;

  return (
    <div className='user-card p-20'>
      <div className='user-avatar mr-15'>
        <img src={avatar} alt={userName} />
      </div>
      <div>
        <OneRow label='User Name:' value={userName} />
        <OneRow label='NO.of gists:' value={numberOfGists} />
        <OneRow
          label='Github link:'
          value={
            <a href={gitHubLink} target='_blank'>
              {gitHubLink}
            </a>
          }
        />
      </div>
    </div>
  );
}
