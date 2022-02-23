import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignup = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const { setUpRecaptcha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid number");
    try {
      const res = await setUpRecaptcha(number);
      console.log(res);
      setConfirmObj(res);
      setFlag(true);
    } catch (err) {
      console.log(err.message);
    }
    console.log(number);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp == null) return;
    try {
      setError("");
      await confirmObj.confirm(otp);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 h-screen bg-pink-300">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-neutral-400  mt-32 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              {error && (
                <div role="alert">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    Error
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{error}</p>
                  </div>
                </div>
              )}
              <form
                className="mt-8"
                onSubmit={getOtp}
                style={{ display: !flag ? "block" : "none" }}
              >
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone NO
                  </label>
                  <PhoneInput
                    defaultCountry="NP"
                    value={number}
                    onChange={setNumber}
                    placeholder="Enter PHones Number"
                    className="h-10 w-full"
                  />
                  <div
                    id="recaptcha-container"
                    className="mt-8 flex items-center ml-8"
                  />
                </div>
                <div className="flex gap-5 mt-6">
                  <Link to="/login">
                    <button className="bg-orange-600 uppercase text-white active:bg-gray-700 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
                      Cancel
                    </button>
                  </Link>
                  <button
                    className="bg-blue-800 uppercase text-white active:bg-gray-700 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="Submit"
                  >
                    Send otp
                  </button>
                </div>
              </form>

              {/* verify */}
              <form
                className="mt-8"
                onSubmit={verifyOtp}
                style={{ display: flag ? "block" : "none" }}
              >
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="enter otp"
                  />

                  <div
                    id="recaptcha-container"
                    className="mt-8 flex items-center ml-8"
                  />
                </div>
                <div className="flex gap-5 mt-6">
                  <Link to="/login">
                    <button className="bg-orange-600 uppercase text-white active:bg-gray-700 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
                      Cancel
                    </button>
                  </Link>
                  <button
                    className="bg-blue-800 uppercase text-white active:bg-gray-700 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="Submit"
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSignup;
