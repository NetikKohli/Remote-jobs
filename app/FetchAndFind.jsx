import { useInfiniteQuery } from "@tanstack/react-query";
import * as cheerio from "cheerio";

// Fetch jobs from the API
const fetchJobs = async ({ pageParam = 1, filters }) => {
  const { keyword, location } = filters;

  const apiUrl = `https://remote-jobs.remote-jobs-legacy.workers.dev/jobs?offset=${pageParam}`;
  const response = await fetch(apiUrl);
  const html = await response.text();

  const $ = cheerio.load(html);
  const jobs = [];

  $('script[type="application/ld+json"]').each((index, element) => {
    const item = JSON.parse($(element).html());
    
    let jobLocation = String(item.jobLocation?.[0]?.address?.addressCountry); // Safeguard

    if(jobLocation == "undefined"){
      jobLocation = "Worldwide"
    }

    // Filter jobs based on criteria
    if (
      (!keyword ||
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        jobLocation.toLowerCase().includes(keyword.toLowerCase().trim()) ||
        item.hiringOrganization.name
          .toLowerCase()
          .includes(keyword.toLowerCase().trim())) &&
      (!location ||
        jobLocation.toLowerCase().includes(location.toLowerCase()) ||
        location.toLowerCase() == "remote" ||
        item.hiringOrganization.name
          .toLowerCase()
          .includes(location.toLowerCase().trim()))
    ) {
      jobs.push({
        title: item.title.replace("&amp;",""),
        company_name: item.hiringOrganization.name.replace("&amp;",""),
        salary: `$${item.baseSalary.value.minValue} - $${item.baseSalary.value.maxValue}`,
        jobType: item.employmentType,
        address: jobLocation,
      });
    }
  });

  return {
    jobs,
    nextPage: jobs.length > 0 ? pageParam + 1 : undefined,
  };
};

// Custom hook for managing jobs
export const FetchAndFind = (filters) => {
  return useInfiniteQuery({
    queryKey: ["jobs", filters],
    queryFn: ({ pageParam = 1 }) => fetchJobs({ pageParam, filters }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
