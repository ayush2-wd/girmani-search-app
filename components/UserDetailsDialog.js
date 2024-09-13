import Image from 'next/image';
import rect from '../public/photos/Rectangle 1.png';
export default function UserDetailsDialog({ user, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Fetch Details</h2>
          <h6 className='text-gray-500'>Here are the details of following employees</h6>
          <br />
          <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Location:</strong> {user.city}</p>
          <p><strong>Phone:</strong> {user.contact_number}</p>
          <br />
          <p><strong>Profile Image:</strong> {user.email}</p>
          <Image src={rect} alt="Rectangle" />

          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  