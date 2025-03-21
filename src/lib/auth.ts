import { supabase } from './supabase';
import { LoginCredentials, SignUpCredentials } from '../types/auth';

export async function signUp({ email, password, name }: SignUpCredentials) {
  try {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (signUpError) {
      return { user: null, error: { message: signUpError.message } };
    }

    return { user: data.user, error: null };
  } catch (err) {
    console.error('Signup error:', err);
    return {
      user: null,
      error: { message: 'An unexpected error occurred during sign up.' },
    };
  }
}

export async function login({ email, password }: LoginCredentials) {
  try {
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      return { user: null, error: { message: loginError.message } };
    }

    return { user: data.user, error: null };
  } catch (err) {
    console.error('Login error:', err);
    return {
      user: null,
      error: { message: 'An unexpected error occurred during login.' },
    };
  }
}

export async function logout() {
  try {
    const { error: logoutError } = await supabase.auth.signOut();

    if (logoutError) {
      return { success: false, error: { message: logoutError.message } };
    }

    return { success: true, error: null };
  } catch (err) {
    console.error('Logout error:', err);
    return {
      success: false,
      error: { message: 'An unexpected error occurred during logout.' },
    };
  }
}

export async function getCurrentUser() {
  try {
    const { data, error: getUserError } = await supabase.auth.getUser();
    
    if (getUserError) {
      return { user: null, error: { message: getUserError.message } };
    }
    
    return { user: data.user, error: null };
  } catch (err) {
    console.error('Get user error:', err);
    return {
      user: null,
      error: { message: 'An unexpected error occurred while getting user.' },
    };
  }
}
