import React from 'react';

interface Contact {
  name: string;
  role: string;
  profilePicture: string;
}

const QuickTransfer: React.FC = () => {
  const contacts: Contact[] = [
    { name: 'Alice', role: 'Designer', profilePicture: 'https://via.placeholder.com/40' },
    { name: 'Bob', role: 'Developer', profilePicture: 'https://via.placeholder.com/40' },
    { name: 'Charlie', role: 'Manager', profilePicture: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h4 className="text-lg font-bold mb-4">Quick Transfer</h4>
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={contact.profilePicture}
              alt={`${contact.name}'s profile`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{contact.name}</p>
              <p className="text-sm text-gray-500">{contact.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2" htmlFor="transferAmount">
          Amount
        </label>
        <input
          type="number"
          id="transferAmount"
          placeholder="Enter amount"
          className="w-full px-4 py-2 border rounded-md"
        />
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;