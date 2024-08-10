// pages/api/reports.js
import { NextResponse } from 'next/server';
import connectTodb from '@/lib/mongodb';
import Report from '@/lib/models/Report';

// creating the post method
export async function POST(request) {
  try {
    const { incidentDetails, vehiclesInvolved, drivers, injuriesAndDamages } = await request.json();

    // Connect to the database
    await connectTodb();

    // Create a new report
    const newReport = new Report({
      incidentDetails,
      vehiclesInvolved,
      drivers,
      injuriesAndDamages
    });

    // Save the report
    const savedReport = await newReport.save();

    return NextResponse.json(savedReport, { status: 201 });
  } catch (error) {
    console.error('Error creating report:', error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}


// GET method to fetch all reports
export async function GET() {
    try {
      // Connect to the database
      await connectTodb();
  
      // Retrieve all reports
      const reports = await Report.find();
  
      return NextResponse.json(reports, { status: 200 });
    } catch (error) {
      console.error('Error fetching reports:', error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }