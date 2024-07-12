import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="w-full rounded-md shadow-md px-11 py-7 box-border">
      <div>
        <form>
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="First name"
          />
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="Last name"
          />
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="example@gmail.com"
          />
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="Password"
          />
          <div className="flex gap-x-7 mb-4">
            <select className="border border-line_color w-[33%] font-gilroyRegular p-2">
              <option>Birthday Year</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
            </select>
            <select className="border border-line_color w-[33%] font-gilroyRegular p-2">
              <option>Birthday Month</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select className="border border-line_color w-[33%] font-gilroyRegular p-2">
              <option>Birthday Day</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <input id="Male" type="radio" name="Gender" className="ml-5" />
          <label for="Male" className="font-gilroyRegular ml-2">
            Male
          </label>
          <input id="Female" type="radio" name="Gender" className="ml-5" />
          <label for="Female" className="font-gilroyRegular ml-2">
            Female
          </label>
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-secondary_bg rounded-md text-white font-gilroyRegular"
            >
              Submit
            </button>
            <p className="text-base font-gilroyMedium">
              Already have an account?
              <Link to="/" className="text-primary_color underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
