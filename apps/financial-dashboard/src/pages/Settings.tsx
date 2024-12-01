import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { SettingsTabs } from '@financial-dashboard/shared-ui';

interface DashboardProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Settings: React.FC<DashboardProps> = ({ setTitle }) => {
  const { user, setUser } = useUser();
  useEffect(() => {
    setTitle('Setting');
  }, [setTitle]);
  return (
    <div className="p-10 space-y-4">
      <SettingsTabs user={user} setUser={setUser} />
    </div>
  );
};

export default Settings;
