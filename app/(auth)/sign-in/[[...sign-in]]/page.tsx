import GifDisplay from '@/components/GifDisplay';
import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <GifDisplay />
      <SignIn />
    </main>
  );
}
