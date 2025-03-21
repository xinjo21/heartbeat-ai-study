import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  activeTab: 'login' | 'signup';
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  activeTab,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 md:p-6">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="HeartBeat Logo" 
            width={32} 
            height={32} 
            className="mr-2"
          />
          <span className="text-xl font-bold text-pink-500">HeartBeat</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
          {/* Left Side - Content */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Virtual Love Story</h1>
            <p className="text-lg mb-8">Experience the thrill of dating in a safe, simulated environment</p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span>100% Safe Environment</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <span>Realistic Conversations</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span>Choose how your story goes</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="p-8 md:p-12 md:w-1/2">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              <Link 
                href="/auth/login" 
                className={`pb-2 px-4 text-center w-1/2 ${activeTab === 'login' ? 'border-b-2 border-pink-500 text-pink-500 font-medium' : 'text-gray-500'}`}
              >
                Login
              </Link>
              <Link 
                href="/auth/signup" 
                className={`pb-2 px-4 text-center w-1/2 ${activeTab === 'signup' ? 'border-b-2 border-pink-500 text-pink-500 font-medium' : 'text-gray-500'}`}
              >
                Sign Up
              </Link>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-6">{subtitle}</p>
            
            {children}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="font-medium">Language</h3>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Legal</h3>
            <div className="flex space-x-4 text-sm text-gray-600">
              <Link href="/privacy-policy" className="hover:text-pink-500">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-pink-500">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} HeartBeat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
