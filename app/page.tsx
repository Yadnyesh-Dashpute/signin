import Qrcode from "@/components/qrcode";
import Googleform from "@/components/googleForm";
import Header from "@/components/header";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose weights you need
});


export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
    <main className={poppins.className}>

      {/* Header stays at the top */}
      <div className="w-full p-4">
        <Header />
      </div>

      {/* Centered grid content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
          <div className="flex justify-center items-center">
            <Qrcode />
          </div>
          <div className="flex justify-center items-center">
            <Googleform />
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
