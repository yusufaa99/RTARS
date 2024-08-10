// pages/api/submitreports.js

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
// import connectTodb from '@/lib/mongodb';
import Report2 from '@/lib/models/report2';

export async function POST(req) {
  try {
    await connectToDatabase();  // Connect to the database

    const data = await req.json();  // Parse the JSON request body
    console.log('Received data:', data);  // Log the received data for debugging

    // Create a new report document from the received data
    const newReport = new Report2(data);

    // Save the new report to MongoDB
    await newReport.save();

    // Respond with a success message if the report was saved successfully
    return new Response(JSON.stringify({ message: 'Report submitted successfully' }), { status: 200 });
  } catch (error) {
    // Log any errors that occur during the process
    console.error('Error saving report to MongoDB:', error);

    // Respond with an error message if something went wrong
    return new Response(JSON.stringify({ message: 'Error submitting report' }), { status: 500 });
  }
}

// export async function POST(request) {
//   try {
//       await connectToDatabase();
//       const data = await request.json();
//       const { date, time, lat, lng, roadType, vehicle1_licensePlate, vehicle1_make, vehicle1_model, vehicle2_licensePlate, vehicle2_make, vehicle2_model, driver1_name, driver1_licenseNumber, driver2_name, driver2_licenseNumber, collisionResult, collisionDescription, injuriesDescription, damagesDescription } = data;

//       if (lat === undefined || lng === undefined) {
//           throw new Error('Latitude or Longitude is undefined');
//       }

//       console.log('Received data:', data);

//       // Process the data (e.g., save to database)

//       return new Response(JSON.stringify({ message: 'Report submitted successfully' }), { status: 200 });
//   } catch (error) {
//       console.error('Error processing request:', error);
//       return new Response(JSON.stringify({ message: 'Error submitting report', error: error.message }), { status: 500 });
//   }
// }


export async function GET() {
  try {
    await connectToDatabase();
    // Fetch all reports from the database
    const reports = await Report2.find({});
    return NextResponse.json(reports, { status: 200 });
  } catch (error) {
    console.error('Error fetching reports:', error);
    return NextResponse.json({ error: 'Error fetching reports' }, { status: 500 });
  }
}
