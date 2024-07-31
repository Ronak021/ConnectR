"use client"; // Ensure this file is used only on the client side

import { useUser } from "@clerk/nextjs";
import Image from "next/image"; // Import Image component

function GifDisplay() {
  const { isSignedIn } = useUser();
  return !isSignedIn ? (
    <Image
      src="/images/video-call3.gif"
      alt="Animated GIF"
      width={700} // Adjust width as needed
      height={280} // Height is auto to maintain aspect ratio
      className="rounded-lg" // You can adjust the styling here
    />
  ) : null;
}

export default GifDisplay;
