// // pages/api/getReports.js
// import { getSession } from "@auth0/nextjs-auth0";
// import dbConnect from "@/lib/db";
// import Report from "@/lib/models/report2"; // Assuming you have a Report model

// export default async function handler(req, res) {
//   try {
//     const session = await getSession(req, res);
//     if (!session) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     await dbConnect();

//     const reports = await Report.find({}); // Fetch reports from the database

//     res.status(200).json({ reports });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// app/api/(auth)/getuser/route.js

// Import necessary modules (if needed)
import { NextResponse } from 'next/server';

// Example GET handler
export async function GET(request) {
  // Your logic here, e.g., fetching user data
  const userData = { name: 'John Doe', email: 'john@example.com' };
  
  return NextResponse.json(userData);
}

// Example POST handler
export async function POST(request) {
  // Handle POST requests if necessary
  const data = await request.json();
  
  // Process data and return a response
  return NextResponse.json({ message: 'User data received', data });
}
