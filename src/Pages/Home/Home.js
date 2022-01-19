import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Users from './Users';

// API url 
const url = 'https://randomuser.me/api/?results=1000';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // fetch user form api 
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setUsers(data.results);
      setLoading(false);
    });
  }, []);
  
  return (
    <main>
      <Link to="/" className ='btn logout-btn'>Logout</Link>
      <section className="users">
        <div className="users-center">
          {users.map((users, index) => {
            return <Users key={index} users={users} />;
          })}
        </div>
        {loading && <h1 className='loading'>Loading....</h1>}
      </section>
    </main>
  );
}

export default Home;
