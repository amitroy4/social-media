import React from "react";
import LeftAuth from "../../authentication/LeftAuth";
import { Registrationicon } from "../../svg/Registrationicon";
import RegistrationForm from "../../authentication/RegistrationForm";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="relative">
        <div className="w-[500px] h-[500px] bg-purple-100 rounded-full absolute -top-44 -left-60"></div>
        <div className="flex gap-x-6 justify-center items-center h-screen">
          <div className="w-[50%]">
            <LeftAuth
              icon={<Registrationicon />}
              title="Start Your Journey"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nihil velit. Nisi unde officia quae explicabo eveniet nesciunt obcaecati eius vero harum, dignissimos, impedit a recusandae aliquam? Inventore ex distinctio officiis impedit numquam doloribus alias aliquid velit hic illo! Quo molestiae neque, ex laboriosam maxime expedita? Repellendus, reprehenderit voluptas ex possimus officia ea."
            />
          </div>
          <div className="w-[40%]">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
