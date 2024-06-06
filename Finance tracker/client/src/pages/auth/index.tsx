//Import Clerk function for signedin, out and user buttons
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export const Auth = () => {
  return <div className="sign-in-container">
    {/* If signed out, show sign up and sign in buttons */}
    <SignedOut>
        <SignUpButton />
        <SignInButton />
    </SignedOut>

    {/* If signed in, show user button */}
    <SignedIn>
        <UserButton />
    </SignedIn>
  </div>;
};
