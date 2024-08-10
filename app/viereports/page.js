"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { getSession } from "@auth0/nextjs-auth0";
export default function ViewReports() {
  // chect if user exist before displaying the reports
  // const session = await getSession();
  // const user = session?.user;
  // console.log(user);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('/api/reports2'); // Adjust the API endpoint if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch reports');
        }
        const data = await response.json();
        setReports(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <p>Loading reports...</p>;
  if (error) return <p>Error loading reports: {error}</p>;

  return (
    <div className="container">
      <h1 className="my-4">Admin Dashboard - Submitted Reports</h1>
      <table className="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th> {/* New Location Column */}
            <th>Road Type</th>
            <th>Vehicle 1</th>
            <th>Vehicle 2</th>
            <th>Driver 1</th> {/* Separated Driver 1 */}
            <th>Driver 2</th> {/* Separated Driver 2 */}
            <th>Collision Result</th>
            <th>Description</th>
            <th>Injuries</th>
            <th>Damages</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Serial Number */}
              <td>{report.date}</td>
              <td>{report.time}</td>
              <td>
                <a 
                  href={`/location?lat=${report.lat}&lng=${report.lng}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Location
                </a>
              </td> {/* Location Link */}
              <td>{report.roadType}</td>
              <td>{`${report.vehicle1_make} ${report.vehicle1_model} (${report.vehicle1_licensePlate})`}</td>
              <td>{`${report.vehicle2_make} ${report.vehicle2_model} (${report.vehicle2_licensePlate})`}</td>
              <td>{`${report.driver1_name} (License: ${report.driver1_licenseNumber})`}</td>
              <td>{`${report.driver2_name} (License: ${report.driver2_licenseNumber})`}</td>
              <td>{report.collisionResult}</td>
              <td>{report.collisionDescription}</td>
              <td>{report.injuriesDescription}</td>
              <td>{report.damagesDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}  
