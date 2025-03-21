import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserPreferences {
  userId: string;
  interestedIn: string | null;
  ageRangeMin: number;
  ageRangeMax: number;
  traits: string[];
}

/**
 * Save user preferences to Supabase
 * @param preferences User preferences data
 * @returns Object containing data and error
 */
export async function saveUserPreferences(preferences: UserPreferences) {
  try {
    const { data, error } = await supabase
      .from('user_preferences')
      .upsert(
        {
          user_id: preferences.userId,
          interested_in: preferences.interestedIn,
          age_range_min: preferences.ageRangeMin,
          age_range_max: preferences.ageRangeMax,
          traits: preferences.traits
        },
        { onConflict: 'user_id' }
      );

    if (error) {
      console.error('Error saving preferences:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    console.error('Unexpected error saving preferences:', error);
    return { 
      data: null, 
      error: { message: 'An unexpected error occurred while saving preferences.' } 
    };
  }
}

/**
 * Get user preferences from Supabase
 * @param userId User ID
 * @returns Object containing data and error
 */
export async function getUserPreferences(userId: string) {
  try {
    const { data, error } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error getting preferences:', error);
      return { data: null, error };
    }

    return { 
      data: {
        userId: data.user_id,
        interestedIn: data.interested_in,
        ageRangeMin: data.age_range_min,
        ageRangeMax: data.age_range_max,
        traits: data.traits
      }, 
      error: null 
    };
  } catch (error) {
    console.error('Unexpected error getting preferences:', error);
    return { 
      data: null, 
      error: { message: 'An unexpected error occurred while getting preferences.' } 
    };
  }
}
