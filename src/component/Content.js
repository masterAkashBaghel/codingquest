import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ContestsTable from '../pages/ContestsTable';

const Content = ({isDarkMode}) => {
    const{query} = useParams();
    const[contests,setContests] = useState([]);
    const API_URL = `https://kontests.net/api/v1/${query}`;


    async function getData()
    {
      try{
        const res = await fetch(API_URL);
        const data = await res.json();
        setContests(data);
        
      }
      catch(err){
        console.log(err);
      }


    }
    useEffect(()=>{
        getData();
    },[query]);

    useEffect(() => {
        console.log(contests);  
      }, [contests]);


      const futureContests = contests.filter((contest) => contest.status === 'BEFORE');
  const runningContests = contests.filter((contest) => contest.status === 'CODING');

  return (
    <div className=' flex  flex-col'>
      <div>
      <ContestsTable contests={futureContests} isDarkMode={isDarkMode} title="Future Contests" />
      </div>
     <div> <ContestsTable contests={runningContests} isDarkMode={isDarkMode} title="Running Contests" /></div>
    </div>
  )
}

export default Content
