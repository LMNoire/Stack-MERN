//Import Clerk function for signedin, out and user buttons
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      {/* If signed out, show sign up and sign in buttons */}
      <SignedOut>
        <SignUpButton mode="modal" />
        {/* Use mode modal for the sign components */}
        <SignInButton mode="modal" />
      </SignedOut>

      {/* If signed in, show user button */}
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
