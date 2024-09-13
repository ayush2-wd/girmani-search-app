import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import coloured from '../public/photos/coloured v1 white.png';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%)',
      }}
    >

      <div className="flex flex-col items-center justify-center mt-24">
        <div className="mb-8">
          <Image src={coloured} alt="Girman Technologies Colored Logo" width={300} height={100} />
        </div>

        <input
          type="text"
          className="w-96 px-6 py-3 border border-gray-300 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
}
