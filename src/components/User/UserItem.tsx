import React from 'react';
import {UserType} from '../../../types';

interface UserItemProps {
  user: UserType;
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
  return (
    <div className={'card mb-4'}>
      <div className={'row no-gutters'}>
        <div className={'col p-2 m-3'}>
          <h5 className={'card-title text-center fs-3 border-bottom border-secondary-subtle mb-3 pb-2'}>{user.name}</h5>
          <p className={'card-text small text-start fs-5'}> <h4 className="d-inline-block">Email:</h4> {user.email}</p>
          <p className={'card-text small text-start fs-5'}> <h4 className="d-inline-block">Role:</h4> {user.role}</p>
          <p className={'card-text small text-start fs-5'} ><h4 className="d-inline-block">Online:</h4> {user.activity ? <>Yes</> : <>No</>}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;