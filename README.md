## Overview
Parse HTML responses from the legacy API and show jobs to the users. Supports searching by keyword and location, and features infinite scrolling to load more jobs dynamically. It also includes user-friendly skeleton loading for a better user experience during data fetching.

Entry point: page.js

# 1. page.js 
page.js is the main page of this next js app. 
It Contains: Navigation, Search, Card and Skeleton(for loading animation) components.
FetchAndFind is used by page.js to fetch the API. 
- Manages filters for searching. 
- Fetches job data using react-query.

# 2. NavigationBar.jsx
Navigation bar contains logo, name - RemoteJobs, notification bell icon and profile picture.

# 3. Search.jsx
Purspose: Renders a search bar for users to filter job listings. Contains two search fields 1. Search by Job title, position, keyword and 2. Search by location
Submits the search criteria to update filters.

# 4. Card.jsx
Purpose: Displays job details includes job title, company name, salary, location.

# 5. Skeleton.jsx
Purpose: Provides visual feedback during data fetching.
Key Features: Displays six loading placeholders with animated skeletons


## Flow of code

# Data Fetching -
The fetchJobs function fetches job data using an API.
Response Parsing: Extracts job details (title, company, salary, location) using Cheerio.
Handles undefined or missing fields.
  
# Infinite Scrolling -
Listens to the scroll event.
Checks if the user has scrolled near the bottom of the page.
Fetches the next batch of jobs when conditions are met.

# Search -
Users enter search criteria in the Search component.
Filters are updated, and data fetching re-triggers with new parameters.

# Rendering -
Displays SkeletonLoader when jobs are loading.
Job Cards if jobs are available.
"No Jobs Found!" message if no jobs match the criteria.
