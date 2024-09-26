import React, { useState } from "react";

interface NavbarProps {
  onRouteChange: (route: string) => void;
  isConnected: boolean;
  connect: () => void;
  address: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ onRouteChange, isConnected, connect, address }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex justify-between items-center">
      <div className="text-2xl font-bold">NFT Marketplace</div>
      
      {/* Desktop Menu */}
      <div className="space-x-4 hidden sm:flex">
        <p
          className="cursor-pointer text-lg hover:bg-gray-200 px-3 py-2 rounded-md transition"
          onClick={() => onRouteChange("explore")}
        >
          Explore
        </p>
        <p
          className="cursor-pointer text-lg hover:bg-gray-200 px-3 py-2 rounded-md transition"
          onClick={() => onRouteChange("mint")}
        >
          Mint
        </p>
        <p
          className="cursor-pointer text-lg hover:bg-gray-200 px-3 py-2 rounded-md transition"
          onClick={() => onRouteChange("mynft")}
        >
          My NFTs
        </p>
        <button
          className={`text-white px-4 py-2 rounded-md transition ${isConnected ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"}`}
          onClick={() => connect()}
          disabled={isConnected}
        >
          {isConnected
            ? address 
              ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}`
              : "Connecting"
            : "Connect"
          }
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex sm:hidden">
        <button 
          className="text-gray-700 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-100 shadow-md sm:hidden text-center">
          <div className="flex flex-col space-y-2 p-4">
            <p
              className="cursor-pointer text-lg hover:bg-gray-200 px-3 py-2 rounded-md transition"
              onClick={() => {
                onRouteChange("explore");
                setMobileMenuOpen(false);
              }}
            >
              Explore
            </p>
            <p
              className="cursor-pointer text-lg hover:bg-gray-200 px-3 py-2 rounded-md transition"
              onClick={() => {
                onRouteChange("mint");
                setMobileMenuOpen(false);
              }}
            >
              Mint
            </p>
            <p
              className="cursor-pointer text-lg hover:bg-gray-200 px-3 py-2 rounded-md transition"
              onClick={() => {
                onRouteChange("mynft");
                setMobileMenuOpen(false);
              }}
            >
              My NFTs
            </p>
            <button
              className={`text-white px-4 py-2 rounded-md transition ${isConnected ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"}`}
              onClick={() => {
                connect();
                setMobileMenuOpen(false);
              }}
              disabled={isConnected}
            >
              {isConnected
                ? address 
                  ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}`
                  : "Connecting"
                : "Connect"
              }
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
