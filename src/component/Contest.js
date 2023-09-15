import React from "react";
import ContestsTable from "../pages/ContestsTable";
import { useState } from "react";
import { useEffect } from "react";

const Contest = ({isDarkMode}) => {
  const [contests, setContests] = useState([]);
  const API_URL = `https://kontests.net/api/v1/all`;

  async function getData() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setContests(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //     console.log(contests);
  //   }, [contests]);

  const futureContests = contests.filter(
    (contest) => contest.status === "BEFORE"
  );
  const runningContests = contests.filter(
    (contest) => contest.status === "CODING"
  );

  return (
    <div className=" ">
      <div className=" flex  flex-col">
        <div className=" ">
          <ContestsTable contests={futureContests} isDarkMode={isDarkMode} title="Future Contests" />
        </div>
        <div>
          {" "}
          <ContestsTable contests={runningContests} isDarkMode={isDarkMode} title="Running Contests" />
        </div>
      </div>
    </div>
  );
};

export default Contest;
