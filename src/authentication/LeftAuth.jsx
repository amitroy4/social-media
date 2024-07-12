import React from "react";

const LeftAuth = ({ icon, title, description }) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className="font-gilroyBold text-7xl text-primary_color">{title}</h1>
      <p className="font-gilroyRegular  text-lg text-text_color mt-3">
        {description}
      </p>
    </div>
  );
};

export default LeftAuth;
