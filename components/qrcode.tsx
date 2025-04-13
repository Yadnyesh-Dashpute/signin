import Image from 'next/image';

export default function Qrcode() {
  return (
    <div className="flex flex-col items-center px-4 text-left">
      <Image
        src="/images/image.png"
        width={250}
        height={250}
        alt="QR code Picture"
        className="w-40 h-40 md:w-64 md:h-64 object-contain"
      />

      <div className="mt-8 md:mt-10 w-full max-w-md">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#630C92] to-[#360750] text-transparent bg-clip-text">
          Log in with QR code
        </h2>
        <p className="text-sm md:text-base bg-gradient-to-r from-[#630C92] to-[#360750] text-transparent bg-clip-text mt-1">
          Scan this with our App to log in instantly
        </p>
      </div>
    </div>
  );
}
