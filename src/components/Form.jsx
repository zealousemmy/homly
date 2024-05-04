import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    email: "",
    customSelect: "",
    termsChecked: false,
    selectedShares: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleShareSelect = (numShares) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedShares: numShares,
    }));
  };

  const handleLocationSelect = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      investOption: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-[#F6F6F6] shadow-md rounded-lg"
    >
      {/* Other form fields */}
      <p className="text-[15px] font-[400] ">Name</p>
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 block w-full outline-none border-gray-300 rounded-md shadow-sm focus:ring-[#008081] focus:border-indigo-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 block w-full outline-none border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="mt-4 w-[20%]">
          <label
            htmlFor="countryCode"
            className="block text-sm font-medium text-gray-700"
          >
            Country:
          </label>
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="+1">+1</option>
            <option value="+91">+91</option>
            {/* Add more country codes as needed */}
          </select>
        </div>

        {/* Phone Number */}
        <div className="mt-4 w-[75%]">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Example@mail.com"
          className="mt-1 p-2 block w-full outline-none border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <h2 className="text-[15px] font-semibold mb-4">
          How many shares are you willing to purchase?
        </h2>
        <div className="grid grid-cols-12 gap-2 mb-4">
          {Array.from({ length: 12 }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleShareSelect(index + 1)}
              className={`px-[4px] border bg-[#fff] rounded-md ${
                formData.selectedShares === index + 1
                  ? "bg-[#008081] bg-[#008081]     text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center ">
          <p className="font-[400] text-[15px] ">Total Amount: </p>
          <h4 className="font-[800] ml-[0.5rem] text-[22px] "> N680,000</h4>
        </div>
      </div>

      <div className="mb-[1rem]">
        <div className="flex items-center ">
          <p className="font-[500] text-[15px] ">NB: </p>
          <h4 className="font-[500] ml-[0.5rem] text-[12px] ">
            {" "}
            We charge a transaction fee of N180k per shares purchase.
          </h4>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4">
        Invest in single or multiple locations?
      </h2>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleLocationSelect("Single")}
          className={`px-[8px] py-[5px] border rounded-md ${
            formData.investOption === "Single"
              ? "bg-[#008081] text-white"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          Single
        </button>
        <button
          onClick={() => handleLocationSelect("Multiple")}
          className={`px-[8px] border rounded-md ${
            formData.investOption === "Multiple"
              ? "bg-[#008081] text-white"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          Multiple
        </button>
      </div>
      {/* Terms and Services Checkbox */}
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="termsChecked"
          name="termsChecked"
          checked={formData.termsChecked}
          onChange={handleChange}
          className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label
          htmlFor="termsChecked"
          className="block text-sm font-medium text-gray-700"
        >
          I agree to the Terms and Services
        </label>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex  w-[100%] mx-auto items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#008081] hover:bg-[#00818194] focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default Form;
