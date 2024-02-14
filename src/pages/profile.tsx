import React, { useState, useEffect } from 'react';
import Layout from '~/components/Layout';

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    bio: '',
    projectSettings: {
      notifications: true,
      defaultView: 'list',
      theme: 'light',
    },
  });

  // Load user profile settings from local storage on component mount
  useEffect(() => {
    const storedProfileData = localStorage.getItem('profileData');
    if (storedProfileData) {
      setProfileData(JSON.parse(storedProfileData));
    }
  }, []);

  // Function to save user profile settings to local storage
  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
  }, [profileData]);

  // Function to handle input change for profile settings
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  // Function to handle checkbox change for project settings
  const handleProjectSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      projectSettings: {
        ...prevProfileData.projectSettings,
        [name]: checked,
      },
    }));
  };

  return (
    <Layout>
      <div className="p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-4">User Profile</h2>

        <form className="mb-4">
          <div className="mb-4">
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleProfileChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleProfileChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleProfileChange}
              rows={3}
              className="border border-gray-300 rounded-md px-4 py-2 resize-none w-full md:w-1/2"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Project Settings</h3>
            <div className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={profileData.projectSettings.notifications}
                  onChange={handleProjectSettingsChange}
                  className="mr-2"
                />
                Receive Notifications
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-1">Default View</label>
              <select
                name="defaultView"
                value={profileData.projectSettings.defaultView}
                onChange={handleProfileChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              >
                <option value="list">List</option>
                <option value="calendar">Calendar</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Theme</label>
              <select
                name="theme"
                value={profileData.projectSettings.theme}
                onChange={handleProfileChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ProfilePage;
