import React from 'react';
import { MapPin, Heart, Calendar, Shield, CheckCircle, Building } from 'lucide-react';

const About = ({image,name}) => {
  console.log(image,'image');
  return (
    <div className="w-full my-8 max-w-7xl mx-auto bg-white rounded-xl  overflow-hidden">
      <div className="p-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl text-center md:text-3xl font-bold text-[#393939 mb-4">About</h2>
          {
            image ? <img className='h-25 w-25 rounded-full bg-cover ' src={image}/>: <img className='h-25 w-25' src='crwd2.svg'/>

          }
          
          
        </div>

        {/* Mission Statement */}
        <div className=" p-4 rounded-lg mb-8">
          <h3 className="text-lg font-semibold  mb-2 flex items-center justify-center  text-center md:text-left">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed text-center ">
            The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-4  rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Website</h3>
            <p className="text-gray-600 text-center">
              www.xyz.com
            </p>
          </div>

          {/* <div className="flex flex-col items-center p-4  rounded-lg">
            <div className="flex items-center mb-2">
             
              <h3 className="text-lg font-semibold">Established</h3>
            </div>
            <p className="text-gray-600">1938</p>
          </div> */}

          {/* <div className="flex flex-col items-center p-4 bg-[#F3F3F2] rounded-lg">
            <div className="flex items-center mb-2">
           
              <h3 className="text-lg font-semibold">Verified on CRWD</h3>
            </div>
            <p className="text-gray-600">2005</p>
          </div> */}

          <div className="flex flex-col items-center p-4  rounded-lg">
            <div className="flex items-center mb-2">
             
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-gray-600 text-center">
              PO Box 37839 Boone IA 50037 US
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg">
            <div className="flex items-center mb-2">
             
              <h3 className="text-lg font-semibold">EIN/Tax ID number</h3>
            </div>
            <p className="text-gray-600 text-center">
              PO Box 37839 Boone IA 50037 US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;