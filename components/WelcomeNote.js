import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousal from "@/components/Carousal";

export default function WelcomeNote() {
    return (
        <div className="container mt-2">
            <div className="text-center">
                <h1 className="display-4">Welcome to the Road Traffic Accident Reporting System</h1>
                <Carousal />
                <p className="lead mt-4">
                    We are committed to improving road safety and facilitating the accurate reporting of traffic accidents. This system provides an intuitive and user-friendly platform for reporting incidents, ensuring that all the necessary information is captured efficiently.
                    Your report plays a crucial role in road safety analysis and helps in preventing future accidents.
                </p>
                <p className="lead">
                    Whether you&apos;re a witness, a driver, or a passenger involved in an accident, this system is here to help you document the incident swiftly and effectively.
                </p>
            </div>

            <div className="mt-3 text-center">
                <h2 className="text-center">Key Features</h2>
                <ul className="lead list-group list-group-flush text-center">
                    <li className="list-group-item">
                        <strong>Interactive Map Integration:</strong> Easily select the precise location of the accident using our interactive map feature.
                    </li>
                    <li className="list-group-item">
                        <strong>Comprehensive Vehicle Information:</strong> Report detailed information about the vehicles involved, including license plates, make, and model.
                    </li>
                    <li className="list-group-item">
                        <strong>Driver and Witness Details:</strong> Include essential details about the drivers and witnesses for accurate record-keeping.
                    </li>
                    <li className="list-group-item">
                        <strong>Injury and Damage Reporting:</strong> Provide a thorough description of any injuries and damages resulting from the accident.
                    </li>
                    <li className="list-group-item">
                        <strong>Collision Analysis:</strong> Capture and document the result of the collision and other relevant details.
                    </li>
                    <li className="list-group-item">
                        <strong>Real-time SMS Notifications:</strong> Receive immediate SMS notifications after successfully submitting your report.
                    </li>
                    <li className="list-group-item">
                        <strong>User-friendly Interface:</strong> Enjoy a seamless experience with a clean, intuitive design that makes reporting fast and straightforward.
                    </li>
                </ul>
            </div>
        </div>
    );
}
