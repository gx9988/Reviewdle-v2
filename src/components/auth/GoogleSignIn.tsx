import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/utils/auth";
import GoogleLogo from "../icons/GoogleLogo";

export const GoogleSignIn = () => {
  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Sign in to track your stats</p>
      <Button 
        variant="outline" 
        className="w-full"
        onClick={handleSignIn}
      >
        <GoogleLogo />
        Sign in with Google
      </Button>
    </div>
  );
};