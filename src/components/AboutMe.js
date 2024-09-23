import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Hakkımda</h2>
      <p className="text-gray-700 mb-4">
        Merhaba! Benim adım Emir Berk Oncu. Ben bir Yazılım Geliştiricisiyim ve
        Full-Stack Developer olarak her geçen gün kendime bir şeylere katmaya
        çalışıyorum. Yazılım geliştirme konusunda tutkuluyum ve her zaman yeni
        şeyler öğrenmeye açığım.
      </p>
      <h3 className="text-xl font-semibold mb-2">İlgi Alanlarım</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Frontend Teknolojileri</li>
        <li>Backend Teknolojileri</li>
        <li>Veritabanları</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">İletişim</h3>
      <p className="text-gray-700">
        Bana ulaşmak için{' '}
        <Link to="/contact" className="text-blue-500 hover:underline">
          Buraya Tıklayın
        </Link>
      </p>
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

export default AboutMe;
