import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Dashboard = () => {
  const { user, logOut } = useUserAuth();
  console.log(user);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="mt-80 flex flex-col items-center justify-center">
        <h1 className="text-4xl">Hello, </h1>
        <p>{user && user.email}</p>
      </div>
      <div className="flex justify-center mt-32">
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={handleLogOut}
        >
          <svg
            class="ml-2 mr-5 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
