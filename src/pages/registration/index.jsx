import React from "react";
import LeftAuth from "../../components/authentication/LeftAuth";
import { Registrationicon } from "../../svg/Registrationicon";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="relative z-[1]">
        <div className=" hidden lg:block w-[500px] h-[500px] bg-purple-100 rounded-full absolute -top-44 -left-60 z-[-1]"></div>
        <div className="flex gap-x-6 justify-center items-center h-screen">
          <div className="lg: w-[30%] xl:w-[50%] hidden lg:block">
            <LeftAuth
              icon={<Registrationicon />}
              title="Start Your Journey"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nihil velit. Nisi unde officia quae explicabo eveniet nesciunt obcaecati eius vero harum, dignissimos, impedit a recusandae aliquam? Inventore ex distinctio officiis impedit numquam doloribus alias aliquid velit hic illo! Quo molestiae neque, ex laboriosam maxime expedita? Repellendus, reprehenderit voluptas ex possimus officia ea."
            />
          </div>
          <div className="w-full lg:w-[45%] xl:w-[35%]">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
