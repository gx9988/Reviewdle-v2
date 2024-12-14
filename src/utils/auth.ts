import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const signInWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        }
      }
    });

    if (error) {
      console.error("Sign in error:", error);
      toast({
        title: "Sign In Failed",
        description: error.message,
        variant: "destructive",
      });
    }

    return { data, error };
  } catch (error) {
    console.error("Error in signInWithGoogle:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred during sign in",
      variant: "destructive",
    });
    return { data: null, error };
  }
};

export const signOut = async () => {
  try {
    // Sign out from Supabase which will also clear the Google session
    const { error } = await supabase.auth.signOut({
      scope: 'global'  // This ensures we sign out from both Supabase and the OAuth provider (Google)
    });
    
    if (error) {
      console.error("Sign out error:", error);
      toast({
        title: "Sign Out Failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
    
    toast({
      title: "Success",
      description: "Signed out successfully",
    });

    // Force a page reload to clear all states and ensure complete sign-out
    window.location.reload();
  } catch (error) {
    console.error("Error in signOut:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred during sign out",
      variant: "destructive",
    });
    throw error;
  }
};