import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-800 text-white h-full w-64 flex flex-col">
      {/* Sidebar Header */}
      <div className="py-4 px-6 bg-gray-900 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2 mt-6">
          {/* Profile */}
          <li>
            <Link href="/">
              <span
                className={`block py-3 px-6 text-sm ${router?.pathname === '/' ? 'bg-gray-700' : ''} hover:bg-gray-700`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <span
                className={`block py-3 px-6 text-sm ${router?.pathname === '/profile' ? 'bg-gray-700' : ''} hover:bg-gray-700`}
              >
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projectTracking">
              <span
                className={`block py-3 px-6 text-sm ${router?.pathname === '/projectTracking' ? 'bg-gray-700' : ''} hover:bg-gray-700`}
              >
                Project Tracking
              </span>
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <span
                className={`block py-3 px-6 text-sm ${router?.pathname === '/tasks' ? 'bg-gray-700' : ''} hover:bg-gray-700`}
              >
                Tasks
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
