# 🌐 RemoteJobs
Live Link: (https://remote-jobs-jade.vercel.app/)

# Getting Started
1️⃣ Clone the Repository :
```git clone https://github.com/NetikKohli/Remote-jobs ```
```cd remote-jobs ```

2️⃣ Install Dependencies: 
``` npm install ```

3️⃣ Start the Development Server
```npm run dev ```

4️⃣ Open in Browser
Visit 👉 (http://localhost:3000) to see the app in action.


 📋 Overview
RemoteJobs is a job-finding web app built with Next.js. It parses HTML responses from a legacy API and displays job listings dynamically.

🌟 Key Features
Search by Keyword and Location: Easily find jobs tailored to your needs.
Infinite Scrolling: Load more jobs seamlessly as you scroll.
Skeleton Loading: Enjoy a user-friendly loading animation during data fetching.
Entry Point: page.js

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

💼 4. Card.jsx -
Purpose: Displays job details in a clean format.
Content: Job Title, Company Name, Salary, Location

✨ 5. Skeleton.jsx -
Purpose: Enhances user experience with smooth loading feedback.
