import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from "../validation";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDate: new Date().getDate(),
  gender: "",
};

const RegistrationForm = () => {
  const [ageError, setAgeError] = useState("");
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      const currentDate = new Date();
      const picked_Date = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDate
      );
      const adult = new Date(1970 + 18, 0, 1);
      const old = new Date(1970 + 70, 0, 1);

      if (currentDate - picked_Date < adult) {
        return setAgeError("Your age is below 18.");
      } else if (currentDate - picked_Date > old) {
        return setAgeError("Your age is above 70.");
      } else {
        return setAgeError("");
      }
    },
  });

  const tempYears = new Date().getFullYear();

  const years = Array.from(new Array(105), (val, index) => tempYears - index);
  const months = Array.from(new Array(12), (val, index) => index + 1);
  const days = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };

  const getDates = Array.from(new Array(days()), (value, index) => index + 1);

  const { errors, touched } = formik;
  // console.log(formik.values);
  return (
    <div className="w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border border border-line_color lg:border-none">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            className={
              errors.fName && touched.fName
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            }
            placeholder="First name"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            name="fName"
            value={formik.values.fName}
          />
          {errors.fName && touched.fName && (
            <p className=" font-gilroyRegular text-red text-sm my-2">
              {errors.fName}
            </p>
          )}
          <input
            type="text"
            className={
              errors.lName && touched.lName
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            }
            placeholder="Last name"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            name="lName"
            value={formik.values.lName}
          />
          {errors.lName && touched.lName && (
            <p className=" font-gilroyRegular text-red text-sm my-2">
              {errors.lName}
            </p>
          )}
          <input
            type="email"
            className={
              errors.email && touched.email
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            }
            placeholder="example@gmail.com"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            name="email"
            value={formik.values.email}
          />
          {errors.email && touched.email && (
            <p className=" font-gilroyRegular text-red text-sm my-2">
              {errors.email}
            </p>
          )}
          <input
            type="password"
            className={
              errors.email && touched.email
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            }
            placeholder="Password"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
          />
          {errors.password && touched.password && (
            <p className=" font-gilroyRegular text-red text-sm my-2">
              {errors.password}
            </p>
          )}
          <div className="flex gap-x-1 lg:gap-x-7 mb-4">
            <select
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              name="bYear"
              value={formik.values.bYear}
              className="border border-line_color w-[33%] font-gilroyRegular p-2"
            >
              <option>Year</option>
              {years.map((years, index) => (
                <option key={index}>{years}</option>
              ))}
            </select>
            <select
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              name="bMonth"
              value={formik.values.bMonth}
              className="border border-line_color w-[33%] font-gilroyRegular p-2"
            >
              <option>Month</option>
              {months.map((months, index) => (
                <option key={index}>{months}</option>
              ))}
            </select>
            <select
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              name="bDate"
              value={formik.values.bDate}
              className="border border-line_color w-[33%] font-gilroyRegular p-2"
            >
              <option>Day</option>
              {getDates.map((dates, index) => (
                <option key={index}>{dates}</option>
              ))}
            </select>
          </div>
          {ageError && (
            <p className=" font-gilroyRegular text-red text-sm my-2">
              {ageError}
            </p>
          )}

          <div className="mt-5">
            <input
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              id="Male"
              type="radio"
              name="gender"
              value="male"
              className="ml-5"
            />
            <label htmlFor="Male" className="font-gilroyRegular ml-2">
              Male
            </label>
            <input
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              id="Female"
              type="radio"
              name="gender"
              value="female"
              className="ml-5"
            />
            <label htmlFor="Female" className="font-gilroyRegular ml-2">
              Female
            </label>
          </div>
          {errors.gender && touched.gender && (
            <p className=" font-gilroyRegular text-red text-sm my-2">
              {errors.gender}
            </p>
          )}
          <div className="sm:flex justify-between items-center mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-secondary_bg rounded-md text-white font-gilroyRegular"
            >
              Submit
            </button>
            <p className="text-base font-gilroyMedium text-base xl:text-sm 2xl:text-base mt-5 sm:mt-0">
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
