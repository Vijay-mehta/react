import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Adidas Outlet. All rights reserved.</p>
        <p>
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>{' '}
          |{' '}
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
