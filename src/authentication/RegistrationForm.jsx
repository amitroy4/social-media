import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from "../validation";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: "",
  bMonth: "",
  bDate: "",
  gender: "",
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      console.log("Hello Signup");
    },
  });

  const { errors, touched } = formik;
  console.log(formik.values);
  return (
    <div className="w-full rounded-md shadow-md px-11 py-7 box-border">
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
          <div className="flex gap-x-7 mb-4">
            <select
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              name="bYear"
              value={formik.values.bYear}
              className="border border-line_color w-[33%] font-gilroyRegular p-2"
            >
              <option>Birthday Year</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
            </select>
            <select
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              name="bMonth"
              value={formik.values.bMonth}
              className="border border-line_color w-[33%] font-gilroyRegular p-2"
            >
              <option>Birthday Month</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              name="bDate"
              value={formik.values.bDate}
              className="border border-line_color w-[33%] font-gilroyRegular p-2"
            >
              <option>Birthday Day</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div>
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
