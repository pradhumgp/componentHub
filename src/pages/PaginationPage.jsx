import { useState } from "react";
import Pagination from "../components/Pagination";
import PaginationBE from "../components/PaginationBE";

const PaginationPage = () => {
  const [approach, setApproach] = useState('');
  return(
    <div className="h-full">
      <div className="flex flex-wrap items-center gap-2 p-2">
      <span className="p-1 text-lg text-white">Select Approach</span>
      <button onClick={()=>setApproach('')} className="p-1 text-lg text-white bg-gray-700 rounded-md">Reset Approach</button>
      <button onClick={()=>setApproach('fe')} className="p-1 text-lg text-white bg-gray-700 rounded-md">Frontend Driven</button>
      <button onClick={()=>setApproach('be')} className="p-1 text-lg text-white bg-gray-700 rounded-md">Backend Driven</button>
      </div>
      {
        approach === 'fe' && (
          <Pagination/>
        )
      }
      {
        approach === 'be' && (
          <PaginationBE/>
        )
      }
    </div>
  )
};

export default PaginationPage;
