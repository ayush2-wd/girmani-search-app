import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';
import Image from 'next/image';
import noResultsImage from '../public/photos/Group 143.png'; 

export default function SearchResults({ query }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      axios.get(`/api/users?query=${query}`)
        .then((res) => {
          if (res.data.length === 0) {
            setError('No results found');
          } else {
            setUsers(res.data);
            setError('');
          }
        })
        .catch((err) => {
          setError('An error occurred while fetching data');
          console.error(err);
        });
    }
  }, [query]);

  return (
    <div
      className="min-h-screen p-10 bg-gray-100"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%)',
      }}
    >
      <h1 className="text-2xl font-bold mb-6">Search Results for {query}</h1>
      
      {error && users.length === 0 && (
        <div className="flex flex-col items-center mt-10">
          <Image
            src={noResultsImage}
            alt="No results found"
            width={200} 
            height={200}
          />
        </div>
      )}

      {!error && users.length === 0 && (
        <div className="flex flex-col items-center mt-10">
          <Image
            src={noResultsImage}
            alt="No results found"
            width={200}
            height={200}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0 && users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const searchQuery = query.query || '';
  return { props: { query: searchQuery } }; 
}
