import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, {ReactNode} from 'react'




export const metadata: Metadata = {
  title: "ConnectR",
  description: "Video calling App",
  
};

// main dashbord layout.
const RootLayout = ({children} : {children : ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>
        {/* <h1>hiiii</h1>  */}
        {children}
        {/* <h1>hiiii</h1>  */}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout