import Image from "next/image";
import Link from "next/link"; 

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f5] py-8 md:py-12 border-t-2 border-none mt-8 md:mt-12">
      <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
        <div className="w-24 md:w-32 mb-4 md:mb-0">
          <Image src="/asset/logo/logo.png" alt="Logo" width={130} height={40} className="w-full h-auto" />
        </div>
        <p className="text-sm md:text-base text-gray-500 text-center order-last md:order-none mt-4 md:mt-0">© 2025 Muhammad Syaiful</p>
        <div className="flex gap-4 md:gap-6 items-center">
          <a href="#" className="w-5 h-5">
            <Image src="/asset/logo/instagram.svg" alt="Instagram" width={20} height={20} />
          </a>
          <a href="#" className="w-5 h-5">
            <Image src="/asset/logo/youtube.svg" alt="YouTube" width={20} height={20} />
          </a>
          <a href="#" className="w-4 h-4">
            <Image src="/asset/logo/facebook.svg" alt="Facebook" width={16} height={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
