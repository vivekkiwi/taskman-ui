import React from 'react';

const InfoBanner = ({ title, message, bgColor, textColor }) => {
  const bannerClasses = `bg-${bgColor} text-${textColor} px-4 py-3 rounded-md text-center`;

  return (
    <div className={bannerClasses}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default InfoBanner;
