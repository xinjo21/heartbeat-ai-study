'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [currentProfile] = useState({
    id: 1,
    name: 'Sarah',
    age: 28,
    location: 'New York, USA',
    bio: "Adventure seeker and coffee enthusiast. Let's explore the city together!",
    matchPercentage: 85,
    interests: ['Travel', 'Coffee', 'Photography'],
    verified: true,
    imageUrl: '/sarah.jpg' // This would be a real image path in a production app
  });

  const recentMatches = [
    {
      id: 101,
      name: 'Emma',
      imageUrl: '/emma.jpg',
      lastMessage: "Hey! How's your day going?",
      timeAgo: '2m ago'
    },
    {
      id: 102,
      name: 'Sophie',
      imageUrl: '/sophie.jpg',
      lastMessage: "That's interesting!",
      timeAgo: '1h ago'
    },
    {
      id: 103,
      name: 'Olivia',
      imageUrl: '/olivia.jpg',
      lastMessage: "Would love to hear more about...",
      timeAgo: '3h ago'
    }
  ];

  const stats = {
    profileViews: 127,
    matches: 12,
    successRate: 76
  };

  const handleLike = () => {
    // In a real app, this would send a like to the backend
    console.log('Liked profile:', currentProfile.id);
    // Then load the next profile
  };

  const handleDislike = () => {
    // In a real app, this would send a dislike to the backend
    console.log('Disliked profile:', currentProfile.id);
    // Then load the next profile
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-pink-500 font-bold text-xl flex items-center">
            <svg width="24px" height="24px" viewBox="0 0 24 24" className="mr-2">
              <path
                fill="currentColor"
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
            HeartBeat
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/matches" className="text-gray-800 hover:text-pink-500 flex items-center font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Matches
            </Link>
            
            <Link href="/messages" className="text-gray-800 hover:text-pink-500 flex items-center font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Messages
            </Link>
            
            <Link href="/notifications" className="text-gray-800 hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </Link>
            
            <Link href="/settings" className="text-gray-800 hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            
            <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 flex">
        {/* Stats Sidebar */}
        <div className="w-1/5 bg-white rounded-lg shadow p-4 mr-6 h-fit">
          <h2 className="font-semibold text-lg mb-4 text-gray-900">Today&apos;s Stats</h2>
          
          <div className="mb-4">
            <p className="text-sm text-gray-800 font-medium">Profile Views</p>
            <p className="text-2xl font-bold text-indigo-600">{stats.profileViews}</p>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-800 font-medium">Matches</p>
            <p className="text-2xl font-bold text-indigo-600">{stats.matches}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-800 font-medium">Success Rate</p>
            <p className="text-2xl font-bold text-green-500">{stats.successRate}%</p>
          </div>
        </div>
        
        {/* Main Profile Card */}
        <div className="w-3/5">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Profile Image */}
            <div className="relative h-96 bg-purple-400">
              {/* In a real app, this would be a real image */}
              <div className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 flex items-center shadow-md">
                <svg className="w-4 h-4 text-pink-500 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
                <span className="text-sm font-medium">{currentProfile.matchPercentage}% Match</span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold mr-2">{currentProfile.name}, {currentProfile.age}</h2>
                  {currentProfile.verified && (
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                <div className="flex items-center text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {currentProfile.location}
                </div>
                
                <p className="text-sm">{currentProfile.bio}</p>
                
                <div className="flex mt-2 space-x-2">
                  {currentProfile.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-center p-4 space-x-4">
              <button 
                onClick={handleDislike}
                className="w-14 h-14 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button 
                onClick={handleLike}
                className="w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Recent Matches Sidebar */}
        <div className="w-1/5 bg-white rounded-lg shadow p-4 ml-6 h-fit">
          <h2 className="font-semibold text-lg mb-4 text-gray-900">Recent Matches</h2>
          
          <div className="space-y-4">
            {recentMatches.map((match) => (
              <div key={match.id} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                  {/* In a real app, this would be a real image */}
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-600">
                    {match.name.charAt(0)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900">{match.name}</p>
                    <p className="text-xs text-gray-700">{match.timeAgo}</p>
                  </div>
                  <p className="text-sm text-gray-800 truncate">{match.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="mt-auto py-6 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-800 mb-4 md:mb-0">
              <Link href="/about" className="mr-4 hover:text-pink-500">About Us</Link>
              <Link href="/safety" className="mr-4 hover:text-pink-500">Safety Tips</Link>
              <Link href="/terms" className="mr-4 hover:text-pink-500">Terms of Service</Link>
              <Link href="/privacy" className="mr-4 hover:text-pink-500">Privacy Policy</Link>
            </div>
            
            <div className="flex items-center">
              <select className="mr-4 bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm text-gray-800">
                <option value="en">en</option>
                <option value="es">es</option>
                <option value="fr">fr</option>
              </select>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-800 hover:text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-800 hover:text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-800">
            &copy; {new Date().getFullYear()} HeartBeat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
