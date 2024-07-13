import React from "react";

const DateOfBirth = ({ formik, years, months, getDates, ageError }) => {
  return (
    <>
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
        <p className=" font-gilroyRegular text-red text-sm my-2">{ageError}</p>
      )}
    </>
  );
};

export default DateOfBirth;
