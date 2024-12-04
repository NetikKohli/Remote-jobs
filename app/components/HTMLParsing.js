async function parseHTML(url) {
    try {
      const response = await fetch(url);
      const htmlContent = await response.text();
  
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html'); 
  
      // Example: Extracting job titles and locations
      const jobTitles = doc.querySelectorAll('.job h2');
      const jobLocations = doc.querySelectorAll('.job .location');
  
      const jobs = [];
      for (let i = 0; i < jobTitles.length; i++) {
        const title = jobTitles[i].textContent.trim();
        const location = jobLocations[i].textContent.trim();
  
        jobs.push({ title, location });
      }
  
      return jobs;
    } catch (error) {
      console.error('Error parsing HTML:', error);
      return [];
    }
  }
  