'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { saveUserPreferences, UserPreferences } from '@/lib/preferences';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function PreferencesPage() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [ageRange, setAgeRange] = useState([23, 35]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const traits = [
    'Funny', 'Caring', 'Ambitious', 'Creative',
    'Romantic', 'Intellectual', 'Adventurous', 'Calm'
  ];

  // Get current user on component mount
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
      } else {
        // Redirect to login if no user is found
        window.location.href = '/';
      }
    };

    getCurrentUser();
  }, []);

  const handleTraitToggle = (trait: string) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter(t => t !== trait));
    } else {
      setSelectedTraits([...selectedTraits, trait]);
    }
  };

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleAgeRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setAgeRange([18, value]);
  };

  const handleSubmit = async () => {
    if (!userId) {
      setError('User not authenticated. Please log in again.');
      return;
    }

    if (!selectedGender) {
      setError('Please select who you are interested in.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Prepare preferences data
      const preferences: UserPreferences = {
        userId,
        interestedIn: selectedGender,
        ageRangeMin: ageRange[0],
        ageRangeMax: ageRange[1],
        traits: selectedTraits
      };

      // Save preferences to Supabase
      const { error: saveError } = await saveUserPreferences(preferences);

      if (saveError) {
        setError(saveError.message);
        return;
      }

      // Redirect to dashboard on success
      window.location.href = '/dashboard';
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Error saving preferences:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 border-b">
        <div className="max-w-screen-xl mx-auto">
          <Link href="/" className="text-pink-500 font-bold text-xl flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
              <path
                fill="currentColor"
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
            HeartBeat
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-6">
        <div className="max-w-screen-sm mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Tell Us Your Preferences</h1>
          <p className="text-center text-gray-600 mb-12">Help us find your perfect virtual match</p>
          
          {/* Gender Selection */}
          <div className="mb-12">
            <h2 className="text-base font-medium mb-4">I&apos;m interested in:</h2>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => handleGenderSelect('women')}
                className={`flex-1 py-4 border rounded-lg transition-colors ${
                  selectedGender === 'women' 
                    ? 'border-pink-500 bg-white shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center">
                  <svg className={`w-6 h-6 mb-2 ${selectedGender === 'women' ? 'text-pink-500' : 'text-gray-400'}`} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z" />
                  </svg>
                  <span className={`font-medium ${selectedGender === 'women' ? 'text-pink-500' : 'text-gray-700'}`}>Women</span>
                </div>
              </button>
              
              <button
                onClick={() => handleGenderSelect('men')}
                className={`flex-1 py-4 border rounded-lg transition-colors ${
                  selectedGender === 'men' 
                    ? 'border-pink-500 bg-white shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center">
                  <svg className={`w-6 h-6 mb-2 ${selectedGender === 'men' ? 'text-pink-500' : 'text-gray-400'}`} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z" />
                  </svg>
                  <span className={`font-medium ${selectedGender === 'men' ? 'text-pink-500' : 'text-gray-700'}`}>Men</span>
                </div>
              </button>
              
              <button
                onClick={() => handleGenderSelect('everyone')}
                className={`flex-1 py-4 border rounded-lg transition-colors ${
                  selectedGender === 'everyone' 
                    ? 'border-pink-500 bg-white shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center">
                  <svg className={`w-6 h-6 mb-2 ${selectedGender === 'everyone' ? 'text-pink-500' : 'text-gray-400'}`} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17.58,4H14V2H21V9H19V5.41L15.17,9.24C15.69,10.03 16,11 16,12C16,14.42 14.28,16.44 12,16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72,16.44 6,14.42 6,12A5,5 0 0,1 11,7C12,7 12.96,7.3 13.75,7.83L17.58,4M11,9A3,3 0 0,0 8,12A3,3 0 0,0 11,15A3,3 0 0,0 14,12A3,3 0 0,0 11,9Z" />
                  </svg>
                  <span className={`font-medium ${selectedGender === 'everyone' ? 'text-pink-500' : 'text-gray-700'}`}>Everyone</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Age Range Slider */}
          <div className="mb-12">
            <h2 className="text-base font-medium mb-4">Age Range</h2>
            <div className="px-1">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>18</span>
                <span className="font-medium text-pink-500">{ageRange[0]}-{ageRange[1]}</span>
                <span>60</span>
              </div>
              
              <div className="relative">
                <input
                  type="range"
                  min="18"
                  max="60"
                  value={ageRange[1]}
                  onChange={handleAgeRangeChange}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, 
                      #ec4899 0%, 
                      #ec4899 ${((ageRange[1] - 18) / (60 - 18)) * 100}%, 
                      #e5e7eb ${((ageRange[1] - 18) / (60 - 18)) * 100}%, 
                      #e5e7eb 100%)`
                  }}
                />
                
                <div className="absolute left-0 right-0 -top-1">
                  <div 
                    className="absolute h-3 w-3 bg-white border-2 border-pink-500 rounded-full"
                    style={{ 
                      left: `calc(${((ageRange[1] - 18) / (60 - 18)) * 100}% - 6px)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Personality Traits */}
          <div className="mb-16">
            <h2 className="text-base font-medium mb-4">Preferred Personality Traits</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {traits.map((trait) => (
                <button
                  key={trait}
                  onClick={() => handleTraitToggle(trait)}
                  className={`py-3 px-4 rounded-full border text-center transition-colors ${
                    selectedTraits.includes(trait)
                      ? 'bg-pink-500 text-white border-pink-500'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleSubmit}
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-full shadow-sm transition-colors w-48"
            >
              {isLoading ? 'Loading...' : 'Let\'s Start'}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-4">{error}</p>
            )}
            <button className="text-gray-500 mt-4 text-sm hover:text-pink-500 transition-colors">
              I want to be more adventurous instead
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-6 border-t mt-auto">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <span className="text-sm text-gray-600 mr-2">Language</span>
            <select className="border border-gray-300 rounded py-1 px-2 text-sm bg-white">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-6 max-w-screen-xl mx-auto">
          &copy; 2024 HeartBeat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
