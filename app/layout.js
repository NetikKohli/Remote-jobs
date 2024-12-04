"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>   
        <title>Remote Jobs</title>
      </head>
      <body>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider> 
      </body>
    </html>
  );
}
