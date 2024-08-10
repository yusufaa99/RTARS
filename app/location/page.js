"use client";

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the LeafletMap component for client-side rendering
const LeafletMap = dynamic(() => import('@/components/LeafletMap2'), { ssr: false });

const MapPage = () => {
  const router = useRouter();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [latitude, setLatitude] = useState(40.712776);
  const [longitude, setLongitude] = useState(-74.005974);

  useEffect(() => {
    if (router.isReady) {
      const { lat, lng } = router.query;

      // Check if lat and lng are available and valid
      if (lat && lng) {
        setLatitude(parseFloat(lat));
        setLongitude(parseFloat(lng));
        setMapLoaded(true);
      } else {
        setMapLoaded(false); // Set to false to show loading or error state
      }
    }
  }, [router.isReady, router.query]);

  if (!mapLoaded) {
    return <p>Loading map...</p>;
  }

  // Ensure latitude and longitude are available
  if (latitude === null || longitude === null) {
    return <p>Map location not found.</p>;
  }

  return (
    <div>
      <h1>Accident Location</h1>
      <LeafletMap latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default MapPage;





// // Load LeafletMap dynamically since it's a client-side component
// const LeafletMap = dynamic(() => import('@/components/LeafletMap2'), { ssr: false });

// export default function MapPage() {
//   const router = useRouter();
//   const { lat, lng } = router.query; // Get lat and lng from the query params

//   return (
//     <div className="container">
//       <h1 className="my-4">Accident Location</h1>
//       {lat && lng ? (
//         <LeafletMap latitude={parseFloat(lat)} longitude={parseFloat(lng)} />
//       ) : (
//         <p>Loading map...</p>
//       )}
//     </div>
//   );
// }
