import React, { useState } from 'react';
import EditProfileForm from './EditProfileForm';

interface User {
  name: string;
  email: string;
  username: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

interface SettingsTabsProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const SettingsTabs: React.FC<SettingsTabsProps> = ({ user, setUser }) => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  const tabs = ['Edit Profile', 'Preference', 'Security'];

  const renderTabContent = () => {
    if (activeTab === 'Edit Profile') {
      return <EditProfileForm user={user} setUser={setUser} />;
    }
    return <div>{activeTab} Content</div>;
  };

  return (
    <div className="p-4 bg-white rounded-3xl">
      <div className="flex flex-wrap space-x-2 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-2 py-2 text-sm md:text-base ${
              activeTab === tab
                ? 'border-b-4 border-[#232323] font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default SettingsTabs;
