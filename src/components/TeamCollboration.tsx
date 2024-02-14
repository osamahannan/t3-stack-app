import React, { useState, useEffect } from 'react';
import AddMemberModal from './AddMemberModal';
import { FaRegUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TeamCollaboration: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState<{ name: string; email: string; role: string }[]>([]);

  useEffect(() => {
    // Retrieve team members from local storage on component mount
    const storedTeamMembers = localStorage.getItem('teamMembers');
    if (storedTeamMembers) {
      setTeamMembers(JSON.parse(storedTeamMembers));
    }
  }, []);

  // Function to save team members to local storage
  const saveTeamMembersToLocalStorage = (members: { name: string; email: string; role: string }[]) => {
    localStorage.setItem('teamMembers', JSON.stringify(members));
  };

  // Function to add a new team member
  const addTeamMember = (newMember: { name: string; email: string; role: string }) => {
    // Add new team member to state
    setTeamMembers([...teamMembers, newMember]);
    // Save updated team members to local storage
    saveTeamMembersToLocalStorage([...teamMembers, newMember]);
  };

  // Function to remove a team member
  const removeTeamMember = (index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers.splice(index, 1);
    setTeamMembers(updatedTeamMembers);
    saveTeamMembersToLocalStorage(updatedTeamMembers);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="team-collaboration-container p-4 bg-gray-100 rounded my-4">
      <h2 className="text-lg font-semibold mb-4">Team Collaboration</h2>

      <div className="mb-4">
        <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add Team Member
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-start justify-between bg-white p-4 rounded shadow">
            <div className="flex flex-col mb-2 gap-1">
              <div className="flex items-center mb-2">
                <FaRegUser className="text-gray-500 mr-2" />
                <span className="font-semibold">{member.name}</span>
              </div>
              <span className="font-semibold">{member.email}</span>
              <span className="font-semibold">{member.role}</span>
            </div>
            <button className="text-red-500 hover:text-red-600 text-xl" onClick={() => removeTeamMember(index)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>

      {showModal && <AddMemberModal onClose={toggleModal} onSave={addTeamMember} />}
    </div>
  );
};

export default TeamCollaboration;