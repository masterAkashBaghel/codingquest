import React, { useState } from "react";
import { motion } from "framer-motion";

const ContestsTable = ({ contests, title, isDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter contests based on the search query
  const filteredContests = contests.filter((contest) =>
    contest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the indexes for slicing data based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the filtered contests data based on the current page
  const slicedContests = filteredContests.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredContests.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      className={`container mx-auto px-4 py-2 lg:w-[75%] ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <div className=" flex justify-center items-center gap-5">
        <p
          className={`text-2xl font-semibold text-center my-4 sm:text-3xl ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {title}
        </p>
        <motion.p
          animate={{ y: [0, -10, 0], opacity: [1, 0.8, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse", // This creates the up and down effect
          }}
          className={`h-[50px] w-[50px] rounded-full ${
            isDarkMode ? "bg-gray-600" : "bg-green-400"
          } text-lg text-white grid place-items-center font-bold`}
        >
          {contests.length}
        </motion.p>
      </div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 2, type: "spring" }}
        className={`flex justify-center items-center space-x-2 sm:space-x-4 mb-4 ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <input
          type="text"
          placeholder="Search by contest name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`border rounded-full px-4 py-2 sm:w-1/3 ${
            isDarkMode ? "  bg-slate-600" : "bg-white"
          }`}
        />
      </motion.div>

      <div className={`overflow-x-auto ${isDarkMode ? "dark" : "light"}`}>
        <table
          className={`min-w-full table-auto border-collapse border ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          }`}
        >
          {/* Table headers */}
          <thead>
            <tr
              className={`bg-${
                isDarkMode ? "gray-600" : "blue-500"
              } text-white`}
            >
              <th className="border p-3">Name</th>
              <th className="border p-3">Start Time</th>
              <th className="border p-3">End Time</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {slicedContests.map((contest, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? isDarkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : isDarkMode
                    ? "bg-gray-400"
                    : "bg-white"
                }
              >
                <td className="border p-3">
                  <a
                    href={contest.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${
                      isDarkMode ? "  text-white" : "blue-500"
                    } hover:underline`}
                  >
                    {contest.name}
                  </a>
                </td>
                <td className="border p-3">
                  {new Date(contest.start_time).toLocaleString()}
                </td>
                <td className="border p-3">
                  {new Date(contest.end_time).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded-md border ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Showing ${startIndex} to ${endIndex} of ${contests.length} entries`}</span>
        <button
          className={`px-4 py-2 rounded-md border ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContestsTable;
