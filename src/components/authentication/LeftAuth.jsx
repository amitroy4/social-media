import React from "react";

const LeftAuth = ({ icon, title, description }) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className="font-gilroyBold text-2xl text-primary_color 2xl:text-6xl  3xl:text-7xl">
        {title}
      </h1>
      <p className="font-gilroyRegular  text-base text-text_color mt-3 2xl:text-lg">
        {description}
      </p>
    </div>
  );
};

export default LeftAuth;
