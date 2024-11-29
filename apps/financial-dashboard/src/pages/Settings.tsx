import React from 'react';
import { useUser } from '../context/UserContext';
import  {SettingsTabs}  from '@financial-dashboard/shared-ui';

const Settings = () => {
  const { user, setUser } = useUser();

  return (
    <div className="p-10 space-y-4">
      <SettingsTabs user={user} setUser={setUser} />
    </div>
  );
};

export default Settings;
