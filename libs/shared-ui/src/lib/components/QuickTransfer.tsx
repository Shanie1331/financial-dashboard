import React from 'react';

interface Contact {
  name: string;
  role: string;
  profilePicture: string;
}

const QuickTransfer: React.FC = () => {
  const contacts: Contact[] = [
    {
      name: 'Livia Bator',
      role: 'CEO',
      profilePicture:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-cartoon-avatar-of-a-man-in-a-jacket-image_2898443.jpg',
    },
    {
      name: 'Randy Press',
      role: 'Director',
      profilePicture:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-cartoon-avatar-of-a-man-in-a-jacket-image_2898443.jpg',
    },
    {
      name: 'Workman',
      role: 'Designer',
      profilePicture:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-cartoon-avatar-of-a-man-in-a-jacket-image_2898443.jpg',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-3xl">
      <div className="flex items-center justify-between mt-4 mb-6 ">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <img
              src={contact.profilePicture}
              alt={`${contact.name}'s profile`}
              className="w-[70px] h-[70px] rounded-full"
            />
            <p className="text-sm font-semibold text-gray-800">
              {contact.name}
            </p>
            <p className="text-sm text-gray-500">{contact.role}</p>
          </div>
        ))}
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-gray-100 rounded-full">
          <span className="text-xl text-gray-400">{'>'}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className=" text-sm text-gray-500 mb-1">Write Amount</p>
        <div className="bg-gray-100 px-4 py-3 rounded-full flex items-center">
          <input
            type="number"
            placeholder="525.50"
            className="bg-transparent outline-none w-full text-gray-800 text-base font-medium pl-2"
          />
        </div>
        <button className="bg-black text-white py-2 px-6 rounded-full flex items-center shadow-md hover:bg-gray-800 transition">
          <span className="font-medium">Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
