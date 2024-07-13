import React from "react";

const Gender = ({ formik, errors, touched }) => {
  return (
    <>
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
    </>
  );
};

export default Gender;
