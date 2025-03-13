import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import App from './App';
import './index.css'

// Retrieve Clerk frontend API from environment variable
const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkFrontendApi) {
  throw new Error("Missing Clerk frontend API key. Check your .env file.");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
