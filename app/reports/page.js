// pages/reports.js

"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';

const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });

const Reports = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        location: { lat: '', lng: '' },
        roadType: '',
        vehiclesInvolved: [
            {
                licensePlate: '',
                make: '',
                model: ''
            },
            {
                licensePlate: '',
                make: '',
                model: ''
            }
        ],
        drivers: [
            {
                name: '',
                licenseNumber: ''
            },
            {
                name: '',
                licenseNumber: ''
            }
        ],
        injuriesAndDamages: {
            injuriesDescription: '',
            damagesDescription: ''
        },
        collisionResult: '',
        collisionDescription: ''
    });

    const handleLocationSelect = (location) => {
        setFormData((prevData) => ({
            ...prevData,
            location: { lat: location.lat, lng: location.lng }
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        setFormData((prevData) => {
            const newData = { ...prevData };
            if (keys.length === 2) {
                newData[keys[0]][keys[1]] = value;
            } else {
                newData[name] = value;
            }
            return newData;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/submitreports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Report submitted successfully:', result);
            // Reset form or redirect as needed
        } catch (error) {
            console.error('Error submitting report:', error);
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
                                <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Time</label>
                                <input type="time" className="form-control" id="time" name="time" value={formData.time} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <LeafletMap onLocationSelect={handleLocationSelect} />
                            </div>
                            <h2>Vehicles Details</h2>
                            {formData.vehiclesInvolved.map((vehicle, index) => (
                                <div key={index} className="mb-4">
                                    <h4>Vehicle {index + 1}</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor={`licensePlate${index}`}>License Plate</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`licensePlate${index}`}
                                                    name={`vehiclesInvolved.${index}.licensePlate`}
                                                    value={vehicle.licensePlate}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor={`make${index}`}>Make</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`make${index}`}
                                                    name={`vehiclesInvolved.${index}.make`}
                                                    value={vehicle.make}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor={`model${index}`}>Model</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`model${index}`}
                                                    name={`vehiclesInvolved.${index}.model`}
                                                    value={vehicle.model}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <h2>Drivers Details</h2>
                            {formData.drivers.map((driver, index) => (
                                <div key={index} className="mb-4">
                                    <h4>Driver {index + 1}</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={`driverName${index}`}>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`driverName${index}`}
                                                    name={`drivers.${index}.name`}
                                                    value={driver.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={`licenseNumber${index}`}>License Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`licenseNumber${index}`}
                                                    name={`drivers.${index}.licenseNumber`}
                                                    value={driver.licenseNumber}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <h2>Collision Details</h2>
                            <div className="form-group mb-3">
                                <label htmlFor="collisionResult">Collision Result</label>
                                <textarea
                                    className="form-control"
                                    id="collisionResult"
                                    name="collisionResult"
                                    value={formData.collisionResult}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                            </div>
                            
                            <div className="form-group mb-3">
                                <label htmlFor="collisionDescription">Collision Description</label>
                                <textarea
                                    className="form-control"
                                    id="collisionDescription"
                                    name="collisionDescription"
                                    value={formData.collisionDescription}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <h2>Injuries Details</h2>
                            <div className="form-group mb-3">
                                <label htmlFor="injuriesDescription">Injuries Description</label>
                                <textarea
                                    className="form-control"
                                    id="injuriesDescription"
                                    name="injuriesAndDamages.injuriesDescription"
                                    value={formData.injuriesAndDamages.injuriesDescription}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="damagesDescription">Damages Description</label>
                                <textarea
                                    className="form-control"
                                    id="damagesDescription"
                                    name="injuriesAndDamages.damagesDescription"
                                    value={formData.injuriesAndDamages.damagesDescription}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit Report</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Reports;


 {/* collisionResult: 
- Two vehicles involved: a sedan and an SUV.
- Moderate damage to the front bumper and hood of the sedan.
- Minor damage to the rear bumper of the SUV.
- Driver of the sedan sustained minor injuries (whiplash).
- No injuries reported for the driver and passengers of the SUV.
- No fatalities.
- Airbags deployed in the sedan. */}

// // pages/report.js
// "use client";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// import React, { useState } from 'react';

// const Reports = () => {
//   return (
//     <div className="container">
//       <h1 className="my-4">Road Traffic Accident Reporting System</h1>
//       <form>
//         <h2>Incident Details</h2>
//         <div className="mb-3">
//           <label htmlFor="date" className="form-label">Date</label>
//           <input type="date" className="form-control" id="date" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="time" className="form-label">Time</label>
//           <input type="time" className="form-control" id="time" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="location" className="form-label">Location</label>
//           <input type="text" className="form-control" id="location" placeholder="Enter location" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="road-type" className="form-label">Type of Road</label>
//           <select className="form-control" id="road-type">
//             <option value="highway">Highway</option>
//             <option value="city-street">City Street</option>
//             <option value="rural-road">Rural Road</option>
//           </select>
//         </div>
        
//         <h2>Vehicles Involved</h2>
//         <h3>Vehicle 1</h3>
//         <div className="mb-3">
//           <label htmlFor="vehicle1-license-plate" className="form-label">License Plate</label>
//           <input type="text" className="form-control" id="vehicle1-license-plate" placeholder="Enter license plate number" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="vehicle1-make" className="form-label">Make</label>
//           <input type="text" className="form-control" id="vehicle1-make" placeholder="Enter vehicle make" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="vehicle1-model" className="form-label">Model</label>
//           <input type="text" className="form-control" id="vehicle1-model" placeholder="Enter vehicle model" />
//         </div>
        
//         <h2>Drivers</h2>
//         <h3>Driver 1</h3>
//         <div className="mb-3">
//           <label htmlFor="driver1-name" className="form-label">Name</label>
//           <input type="text" className="form-control" id="driver1-name" placeholder="Enter driver's name" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="driver1-license" className="form-label">License Number</label>
//           <input type="text" className="form-control" id="driver1-license" placeholder="Enter driver's license number" />
//         </div>
        
//         <h2>Injuries and Damages</h2>
//         <div className="mb-3">
//           <label htmlFor="injuries-description" className="form-label">Injuries Description</label>
//           <textarea className="form-control" id="injuries-description" rows="3" placeholder="Describe any injuries"></textarea>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="damages-description" className="form-label">Damages Description</label>
//           <textarea className="form-control" id="damages-description" rows="3" placeholder="Describe any damages"></textarea>
//         </div>
        
//         <button type="submit" className="btn btn-primary">Submit Report</button>
//       </form>
//     </div>
//   );
// };

// export default Reports;
