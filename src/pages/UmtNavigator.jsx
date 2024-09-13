// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const UmtNavigator = () => {
//   const mapContainerStyle = {
//     width: '100%',
//     height: '500px',
//   };

//   const center = {
//     lat: 31.5204, // Latitude for Lahore, Pakistan (replace with UMT coordinates)
//     lng: 74.3587, // Longitude for Lahore, Pakistan (replace with UMT coordinates)
//   };

//   const mapOptions = {
//     disableDefaultUI: true,
//     zoomControl: true,
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-16">
//       <div className="bg-white shadow-xl rounded-lg overflow-hidden md:max-w-4xl w-full mx-auto flex flex-col">
//         <div className="w-full p-8 md:p-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">UMT Navigator</h1>
//           <p className="text-lg text-gray-600 mb-8">
//             Navigate through the University of Management and Technology with ease using our interactive map.
//           </p>
//           <div className="w-full h-96">
//             <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//               <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 center={center}
//                 zoom={15}
//                 options={mapOptions}
//               >
//                 <Marker position={center} />
//               </GoogleMap>
//             </LoadScript>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UmtNavigator;




import React from "react";

const UmtNavigator = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-16">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:max-w-4xl w-full mx-auto flex flex-col">
        <div className="w-full p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">UMT Navigator</h1>
          <p className="text-lg text-gray-600 mb-8">
            Navigate through the University of Management and Technology with ease using our interactive map.
          </p>
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-700">Map will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmtNavigator;
