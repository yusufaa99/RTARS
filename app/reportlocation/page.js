"use client"
import LeafletMap from '@/components/LeafletMap3';
// import Servicescard from "@/Components/Servicescard";
import { useEffect } from 'react';
export default function Services() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-sm-2'>

                    </div>
                    <div className='col-sm-8'>
                        <div style={{ padding: '20px' }}>
                            <h1></h1>

                            <p>
                                <strong>Purpose of the Map Feature:</strong> The map feature allows you to pinpoint the exact location of an accident by entering the latitude and longitude coordinates. This helps ensure that emergency services can quickly and accurately locate the accident scene.
                            </p>

                            <h2>How to Use the Map Feature</h2>
                            <ol>
                                <li>Enter the latitude and longitude coordinates of the accident location in the respective fields below.</li>
                                <li>Click the <strong>Search</strong> button to display the location on the map.</li>
                                <li>Confirm that the location displayed on the map matches the accident location.</li>
                            </ol>
                            <LeafletMap />
                        </div>
                    </div>
                    <div className='col-sm-2'>

                    </div>
                </div>
            </div>
        </>
    );
}
