"use client";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Search from "./components/Search";
import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";
import * as cheerio from "cheerio";

function Home() {
  const [filters, setFilters] = useState({ keyword: "", location: "" });
  const [jobs, setJobs] = useState({});

  async function ParseHTML() {
    const apiUrl =
      "https://remote-jobs.remote-jobs-legacy.workers.dev/jobs?offset=1";

    // Fetch HTML response from the API
    const response = await fetch(apiUrl);
    const html = await response.text();

    const $ = cheerio.load(html);

    // Extracting data from the <tr> element
    const jobTitle = $('h2[itemprop="title"]').text().trim().split("\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t");
    const companyName = $('h3[itemprop="name"]').text().trim().split("\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t");
    const salary = $("div.location").eq(1).text().trim(); // Salary is in second <div> with class "location"
   /// const jobUrl = $("a.preventLink").attr("href").trim();
   // const jobId = $("tr").attr("data-id");
  
    setJobs({
      title: jobTitle,
      company_name: companyName,
      salary: salary,
     // jobUrl: jobUrl,
     // jobId: jobId,
    });
  }
  ParseHTML();

  return (
    <div>
      <NavigationBar />
      <Search />
      <div className="grid sm: grid-cols-2 lg:grid-cols-3">
        {jobs.title?jobs.title.map((job, index) => (
          <Card key={index} title={job} company_name={jobs.company_name[index]}/>
        )):"Loading ....."}
      </div>
    </div>
  );
}

export default Home;
