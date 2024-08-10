// pages/api/getReports.js
import { getSession } from "@auth0/nextjs-auth0";
import dbConnect from "@/lib/dbConnect";
import Report from "@/models/Report"; // Assuming you have a Report model

export default async function handler(req, res) {
  try {
    const session = await getSession(req, res);
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await dbConnect();

    const reports = await Report.find({}); // Fetch reports from the database

    res.status(200).json({ reports });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
