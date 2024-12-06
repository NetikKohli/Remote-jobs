
## Overview
Parse HTML responses from the legacy API and show jobs to the users. Supports searching by keyword and location, and features infinite scrolling to load more jobs dynamically. It also includes user-friendly skeleton loading for a better user experience during data fetching.

Entry point: page.js

🔍 Components -

🏠 1. page.js -
Includes: Navigation, Search, Card, and Skeleton components.
FetchAndFind: Fetches job data using react-query and applies search filters dynamically.

🧭 2. NavigationBar.jsx -
Displays the app’s logo and name: RemoteJobs.
Includes a notification bell icon and a profile picture for user interaction.

🔎 3. Search.jsx -
Purpose: Enables users to refine job listings.
Fields: Search by Job Title, Position, or Keyword.
Search by Location.
Submits search criteria to update filters.

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
    |
    V
# Infinite Scrolling -
Listens to the scroll event.
Checks if the user has scrolled near the bottom of the page.
Fetches the next batch of jobs when conditions are met.
    |
    V
# Search -
Users enter search criteria in the Search component.
Filters are updated, and data fetching re-triggers with new parameters.
    |
    V
# Rendering -
Displays SkeletonLoader when jobs are loading.
Job Cards if jobs are available.
"No Jobs Found!" message if no jobs match the criteria.
