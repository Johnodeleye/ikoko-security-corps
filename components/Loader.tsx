"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
  const [showTextLogo, setShowTextLogo] = useState(false);

  useEffect(() => {
    const textLogoTimeout = setTimeout(() => setShowTextLogo(true), 4000); // Show textlogo after 5s
    return () => clearTimeout(textLogoTimeout);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-transparent z-50">
      {/* Main Logo with Animation */}
      <Image
        src="/logo.png"
        alt="Main Logo"
        width={150}
        height={150}
        className="animate-bounce"
      />

      {/* Text Logo appears after 5 seconds */}
      {showTextLogo && (
        <Image
          src="/textlogo.png"
          alt="Text Logo"
          width={200}
          height={100}
          className="mt-4 animate-fadeIn opacity-0 animate-duration-[2s]"
        />
      )}
    </div>
  );
};

export default Loader;
