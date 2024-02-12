import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AddMemberModal: React.FC<{ onClose: () => void; onSave: (member: { name: string; email: string; role: string }) => void }> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // Function to handle adding a new team member
  const handleAddMember = () => {
    // Save new team member data to local storage
    const newMember = { name, email, role };
    onSave(newMember);
    // Reset input fields
    setName('');
    setEmail('');
    setRole('');
    // Close modal
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Team Member</h2>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Role</label>
          <input
            type="text"
            value={role}
            onChange={e => setRole(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <button onClick={handleAddMember} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add Member
        </button>
      </div>
    </div>
  );
};

export default AddMemberModal;