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

    const jobLocation = item.jobLocation?.address?.addressLocality || ''; // Safeguard

    // Filter jobs based on criteria
    if (
      (!keyword || item.title.toLowerCase().includes(keyword.toLowerCase())) &&
      (!location || jobLocation.toLowerCase().includes(location.toLowerCase()) || location.toLowerCase()=='remote' || location.toLowerCase().includes('any'))
    ) {
      jobs.push({
        title: item.title,
        company_name: item.hiringOrganization.name,
        salary: `$${item.baseSalary.value.minValue} - $${item.baseSalary.value.maxValue}`,
        jobType: item.employmentType,
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