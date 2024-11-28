import React from 'react';
import { useUser } from '../context/UserContext';
import  {SettingsTabs}  from '@financial-dashboard/shared-ui';

const Settings = () => {
  const { user, setUser } = useUser();

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <SettingsTabs user={user} setUser={setUser} />
    </div>
  );
};

export default Settings;
