"use client"; // Ensure this file is used only on the client side

import { useUser } from "@clerk/nextjs";

function GifDisplay() {
  const { isSignedIn } = useUser();
  return !isSignedIn ? (
    <img
      src="/images/video-call3.gif"
      alt="Animated GIF"
      className="w-1/2 max-w-full h-auto rounded-lg" // You can adjust the width here as needed
    />
  ) : null;
}

export default GifDisplay;
