import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

//Set Clerk key in a const
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

//Error if no key
if (!PUBLISHABLE_KEY) {
  throw new Error ("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* All components inside ClerkProvider */}
    <ClerkProvider publishableKey={}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
