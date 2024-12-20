"use client";
import { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import Search from "./components/Search";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";
import { FetchAndFind } from "./FetchAndFind";

export default function Home() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
  });

  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
    status,
  } = FetchAndFind(filters);

  const jobs = data?.pages.flatMap((page) => page.jobs) || [];
  
  
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    refetch();
  }, [filters]);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavigationBar />
      <Search setFilters={setFilters} />
      <div className="grid grid-cols-3 lg:gap-4 lg:p-4 max-sm:gap-1">
        {(status === "loading" ) ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          jobs.length > 0 ? (
            jobs.map((job, index) => (
              <Card
                key={index}
                title={job.title}
                company_name={job.company_name}
                salary={job.salary}
                jobType={job.jobType}
                address={job.address}
                company_logo={job.company_logo}
              />
              
            ))
          ) : (
            <div className="flex justify-center items-center h-72 overflow-none w-screen">
              <h1 className="text-2xl font-bold text-gray-500">Ohh No Job Found ...</h1>
            </div>  
          )
        )}
      </div>
      {isFetchingNextPage && <div className="grid grid-cols-3 lg:gap-3 max-sm:gap-1"> 
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>}
    </div>
  );
}
