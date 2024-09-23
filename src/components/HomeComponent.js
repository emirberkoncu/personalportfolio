import React from 'react';
import GitHubProfile from './GitHubProfile';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomeComponent = () => {
  return (
    <div className="p-6">
      <GitHubProfile username="emirberkoncu"></GitHubProfile>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/in/emironcu2000/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600"
        >
          <FaLinkedin className="mr-1" /> LinkedIn
        </a>
        <a
          href="https://github.com/emirberkoncu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700"
        >
          <FaGithub className="mr-1" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default HomeComponent;
