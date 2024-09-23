import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const MailComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_alittcc',
        'template_6jpi9ol',
        formData,
        '3de3oL4SPvTchpInv'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Form alanlarını temizle
          setFormData({
            name: '',
            email: '',
            message: '',
            phone: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Benimle iletisime gecin
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            İsim: <span className="text-red-500">*</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E-posta: <span className="text-red-500">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mesaj: <span className="text-red-500">*</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default MailComponent;
