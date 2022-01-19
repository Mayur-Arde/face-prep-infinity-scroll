import React from 'react';
import LazyLoad from 'react-lazyload';

function Users({ users }) {
  return (
    <article className="single-user">
      <LazyLoad height={1000} offset={1}>
        <img src={users.picture.large} alt={users.name.first} />
      <div className="user-info">
        <h4>
          {users.name.first} {users.name.last}
        </h4>
        <p>{users.email}</p>
      </div>
      </LazyLoad>
    </article>
  );
}

export default Users;
