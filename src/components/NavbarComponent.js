import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className="bg-blue-400 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link to="/">Emir Berk Oncu</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/about" className="hover:underline">
            Hakkımda
          </Link>
          <Link to="/contact" className="hover:underline">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
