import React from 'react';

const Footer = () => {
  const getYear = () => {
    const today = new Date();
    const year = today.getFullYear().toString();
    return year;
  };

  return (
    <div className='footer'>
      <p>&copy; Andrew Merrell | {getYear()}</p>
    </div>
  );
};

export default Footer;
