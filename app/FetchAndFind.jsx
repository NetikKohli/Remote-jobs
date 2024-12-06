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

    const jobTitle = item.title.replace("&amp;", "");
    const companyName = item.hiringOrganization.name.replace("&amp;", "");
    
    //when icon is present then show that icon other a default icon to represent an organization
    const companyLogo = item.image?item.image: "https://cdn-icons-png.freepik.com/256/4300/4300058.png?ga=GA1.1.727125107.1722242636&semt=ais_hybrid";

    const jobSalary = `$${item.baseSalary.value.minValue} - $${item.baseSalary.value.maxValue}`;
    const jobType = item.employmentType;
    const companyUrl = item.hiringOrganization.url;
    let jobLocation = String(item.jobLocation?.[0]?.address?.addressCountry);

    const description = item.description.replace("&amp;", "");
    console.log(companyLogo);

    if (jobLocation == "undefined") {
      jobLocation = "Worldwide";
    }

    // Filter jobs based on criteria
    if (
      (!keyword ||
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        companyName.toLowerCase().includes(keyword.toLowerCase())) &&
      (!location ||
        jobLocation.toLowerCase().includes(location.toLowerCase()) ||
        location.toLowerCase() == "remote")
    ) {
      //if condition scope starts here
      jobs.push({
        title: jobTitle,
        company_name: companyName,
        salary: jobSalary,
        jobType: jobType,
        company_logo: companyLogo,
        address: jobLocation,
        description: description,
        company_url: companyUrl,
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
