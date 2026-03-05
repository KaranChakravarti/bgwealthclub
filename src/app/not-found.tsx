import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function NotFound() {
  return (
    <div className="relative flex flex-col min-h-screen font-['Arvo',_serif] text-gray-800">
      {/* Background Image - Fixed */}
      <div className="fixed inset-0 w-full  h-full -z-10 bg-black">
        <Image
          src="/bg.gif" 
          alt="Animated Background"
          fill
          className="object-cover opacity-90"
          unoptimized={true}
          priority
        />
        {/* Optional overlay since gif might be distracting */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      
       
      

      <main className="flex-grow flex items-center justify-center p-4">
        {/* Glass Effect Container */}
        <div className="max-w-xl w-full mx-auto p-12 text-center rounded-2xl shadow-2xl bg-white/30 backdrop-blur-xl border border-white/40">
          
          {/* 404 Heading */}
          <h1 className="text-8xl font-extrabold text-gray-900 mb-2 drop-shadow-sm">
            404
          </h1>

          {/* Lost Message */}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">
            Looks like you're lost
          </h3>

          {/* Description - lighter text for readability on dark/glass */}
          <p className="text-lg text-gray-800 mb-8 font-medium">
            The page you are looking for is not available!
          </p>

          {/* Go to Home Button */}
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out backdrop-blur-none"
          >
            Go to Home
          </Link>
        </div>
      </main>
      <div>
        
      </div>

     
    </div>
  );
}