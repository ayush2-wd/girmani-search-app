import { useState } from 'react';
import UserDetailsDialog from './UserDetailsDialog';
import Image from 'next/image';
import rect from '../public/photos/Rectangle 1.png'; 
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 

export default function UserCard({ user }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="card bg-white shadow-md p-6 rounded-lg flex flex-col space-y-4 max-w-sm border border-gray-200">
            <div className="flex items-center space-x-4">
            <div className="p-3 border-2 border-gray-300 rounded-full">
      <Image
        src={rect}
        alt="User Profile"
        className="rounded-full"
        width={78}
        height={78}
      />
    </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{user?.first_name || 'First Name'} {user?.last_name || 'Last Name'}</h2>
                <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <p className="text-base">{user?.city || 'No address available'}</p>
                </div>
            </div>
        
        <hr className="w-full" />
        <div className="flex justify-between items-center w-full text-black">
  <div>
    <p className="text-xl font-semibold flex items-center">
      <FaPhone className="mr-2 text-xl" />
      {user?.contact_number || 'No phone number available'}
    </p>
    <p className="text-sm text-gray-500 mt-1">
      {user?.availability || 'Available on phone'}
    </p>
  </div>
  <button
    className="px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800"
    onClick={() => setIsOpen(true)}
  >
    Fetch Details
  </button>
</div>


        {isOpen && <UserDetailsDialog user={user} onClose={() => setIsOpen(false)} />}
      </div>
    );
  }
