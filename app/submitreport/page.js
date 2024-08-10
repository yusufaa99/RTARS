"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import { useState } from "react";
import { useRouter } from "next/navigation";


const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });

export default function Reports() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [roadType, setRoadType] = useState('');
    const [vehicle1LicensePlate, setVehicle1LicensePlate] = useState('');
    const [vehicle1Make, setVehicle1Make] = useState('');
    const [vehicle1Model, setVehicle1Model] = useState('');
    const [vehicle2LicensePlate, setVehicle2LicensePlate] = useState('');
    const [vehicle2Make, setVehicle2Make] = useState('');
    const [vehicle2Model, setVehicle2Model] = useState('');
    const [driver1Name, setDriver1Name] = useState('');
    const [driver1LicenseNumber, setDriver1LicenseNumber] = useState('');
    const [driver2Name, setDriver2Name] = useState('');
    const [driver2LicenseNumber, setDriver2LicenseNumber] = useState('');
    const [collisionResult, setCollisionResult] = useState('');
    const [collisionDescription, setCollisionDescription] = useState('');
    const [injuriesDescription, setInjuriesDescription] = useState('');
    const [damagesDescription, setDamagesDescription] = useState('');

    const router = useRouter();
    const handleLocationSelect = (location) => {
        setLat(location.lat);
        setLng(location.lng);
        console.log("Location selected:", location);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (lat === null || lng === null) {
            console.error('Latitude or Longitude not set');
            return;
        }

        const formData = {
            date,
            time,
            lat,
            lng,
            roadType,
            vehicle1_licensePlate: vehicle1LicensePlate,
            vehicle1_make: vehicle1Make,
            vehicle1_model: vehicle1Model,
            vehicle2_licensePlate: vehicle2LicensePlate,
            vehicle2_make: vehicle2Make,
            vehicle2_model: vehicle2Model,
            driver1_name: driver1Name,
            driver1_licenseNumber: driver1LicenseNumber,
            driver2_name: driver2Name,
            driver2_licenseNumber: driver2LicenseNumber,
            collisionResult,
            collisionDescription,
            injuriesDescription,
            damagesDescription,
        };

        try {
            console.log('Submitting form data:', formData);

            const response = await fetch('http://localhost:3000/api/reports2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                router.push("/submitreport");
                // const text = await response.text(); // Read response as text
                // const result = JSON.parse(text); // Parse JSON
                const result = await response.json();
                console.log('Report submitted successfully:', result);
                alert('Thank You, The Report submitted successfully:', result);

                // Clear form data by resetting all state variables
                setDate('');
                setTime('');
                setLat('');
                setLng('');
                setRoadType('');
                setVehicle1LicensePlate('');
                setVehicle1Make('');
                setVehicle1Model('');
                setVehicle2LicensePlate('');
                setVehicle2Make('');
                setVehicle2Model('');
                setDriver1Name('');
                setDriver1LicenseNumber('');
                setDriver2Name('');
                setDriver2LicenseNumber('');
                setCollisionResult('');
                setCollisionDescription('');
                setInjuriesDescription('');
                setDamagesDescription('');
            }


        } catch (error) {
            console.error('Error submitting report:', error);
            alert(error('Error submitting report:', error));
        }
    };

    return (
        <>
            <div className="container">
                <h1 className="my-4">Road Traffic Accident Reporting System</h1>
                
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-6'>
                        <form onSubmit={handleSubmit}>
                            <h2>Incident Details</h2>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Time</label>
                                <input type="time" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <LeafletMap onLocationSelect={handleLocationSelect} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="roadType" className="form-label">Road Type</label>
                                <input type="text" className="form-control" id="roadType" value={roadType} onChange={(e) => setRoadType(e.target.value)} />
                            </div>
                            <h2>Vehicles Details</h2>
                            <div className="mb-3">
                                <label htmlFor="vehicle1_licensePlate" className="form-label">Vehicle 1 License Plate</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vehicle1_licensePlate"
                                    value={vehicle1LicensePlate}
                                    onChange={(e) => setVehicle1LicensePlate(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehicle1_make" className="form-label">Vehicle 1 Make</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vehicle1_make"
                                    value={vehicle1Make}
                                    onChange={(e) => setVehicle1Make(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehicle1_model" className="form-label">Vehicle 1 Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vehicle1_model"
                                    value={vehicle1Model}
                                    onChange={(e) => setVehicle1Model(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehicle2_licensePlate" className="form-label">Vehicle 2 License Plate</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vehicle2_licensePlate"
                                    value={vehicle2LicensePlate}
                                    onChange={(e) => setVehicle2LicensePlate(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehicle2_make" className="form-label">Vehicle 2 Make</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vehicle2_make"
                                    value={vehicle2Make}
                                    onChange={(e) => setVehicle2Make(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehicle2_model" className="form-label">Vehicle 2 Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vehicle2_model"
                                    value={vehicle2Model}
                                    onChange={(e) => setVehicle2Model(e.target.value)}
                                />
                            </div>

                            <h2>Drivers Details</h2>
                            <div className="mb-3">
                                <label htmlFor="driver1_name" className="form-label">Driver 1 Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="driver1_name"
                                    value={driver1Name}
                                    onChange={(e) => setDriver1Name(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="driver1_licenseNumber" className="form-label">Driver 1 License Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="driver1_licenseNumber"
                                    value={driver1LicenseNumber}
                                    onChange={(e) => setDriver1LicenseNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="driver2_name" className="form-label">Driver 2 Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="driver2_name"
                                    value={driver2Name}
                                    onChange={(e) => setDriver2Name(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="driver2_licenseNumber" className="form-label">Driver 2 License Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="driver2_licenseNumber"
                                    value={driver2LicenseNumber}
                                    onChange={(e) => setDriver2LicenseNumber(e.target.value)}
                                />
                            </div>

                            <h2>Collision Details</h2>
                            <div className="form-group mb-3">
                                <label htmlFor="collisionResult">Collision Result</label>
                                <textarea
                                    className="form-control"
                                    id="collisionResult"
                                    value={collisionResult}
                                    onChange={(e) => setCollisionResult(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="collisionDescription">Collision Description</label>
                                <textarea
                                    className="form-control"
                                    id="collisionDescription"
                                    value={collisionDescription}
                                    onChange={(e) => setCollisionDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="injuriesDescription">Injuries Description</label>
                                <textarea
                                    className="form-control"
                                    id="injuriesDescription"
                                    value={injuriesDescription}
                                    onChange={(e) => setInjuriesDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="damagesDescription">Damages Description</label>
                                <textarea
                                    className="form-control"
                                    id="damagesDescription"
                                    value={damagesDescription}
                                    onChange={(e) => setDamagesDescription(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit Report</button>
                        </form>
                    </div>
                    <div className='col-sm-3'></div>
                </div>
            </div>
            <Footer />
        </>
    );
}
