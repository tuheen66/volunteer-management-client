import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { MdTableRows } from "react-icons/md";
import { Helmet } from "react-helmet-async";

export const SearchContext = createContext(null);

const NeedVolunteer = () => {
  const [tabIndex, setTabIndex] = useState(0);

  

  const info={}



  return (
    <div className="w-[80%] mx-auto mt-8">
      <Helmet>
        <title>Benevo | Need Volunteer</title>
      </Helmet>
     
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-end flex-nowrap ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex justify-end items-center flex-shrink-0 px-5 py-3 space-x-2  ${
            tabIndex === 0 ? "border " : ""
          }   mb-4 dark:border-gray-600 dark:text-gray-900`}
        >
          <span>
            <TfiLayoutGrid3Alt />
          </span>
        </Link>

        <Link
          to={"tableLayout"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border " : ""
          } mb-4 dark:border-gray-600 dark:text-gray-900`}
        >
          <span className="text-xl">
            <MdTableRows />
          </span>
        </Link>
      </div>
      <SearchContext.Provider value={info}>
        <Outlet></Outlet>
      </SearchContext.Provider>
    </div>
  );
};

export default NeedVolunteer;
