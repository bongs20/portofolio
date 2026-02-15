
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center px-5">
      {/* Navbar */}
      <nav className="h-[100px] w-full max-w-[1228px] flex items-center justify-between bg-[#f5f5f5]">
        <div className="w-[130px]">
          <Image src="/asset/logo/logo.png" alt="Logo" width={130} height={40} />
        </div>
        <div className="flex gap-[60px] items-center">
          <Link href="/" className="text-[29px] font-normal text-[#282828] no-underline">Home</Link>
          <p className="text-[29px] font-normal text-[#282828]"><strong>About</strong></p>
          <Link href="/contact" className="text-[29px] font-normal text-[#282828] no-underline">Contact</Link>
        </div>
      </nav>

      {/* About Me Section */}
      <section className="w-full max-w-[1284px] mt-12">
        <h2 className="text-[45px] text-black font-normal mb-[27px]">About Me</h2>
        <div className="h-[2px] bg-black mb-[30px]"></div>
        <div className="text-[30px] leading-relaxed text-black font-normal">
          <p className="mb-5">Saya adalah seorang pembelajar aktif yang berdedikasi pada pengembangan diri dan penciptaan solusi yang berdampak. Dengan ketertarikan yang mendalam pada dunia teknologi dan inovasi, saya selalu berusaha untuk memadukan ketelitian riset dengan implementasi yang praktis dan efisien.</p>
          <p className="mb-5">Pengalaman saya dalam berbagai proyek penelitian dan pengabdian telah membentuk pola pikir yang analitis namun tetap humanis. Saya percaya bahwa kemajuan sejati terjadi ketika pengetahuan tidak hanya berhenti di teori, tetapi mampu menjadi alat untuk memberdayakan dan menginspirasi orang lain.</p>
          <p className="mb-5">Bagi saya, setiap tantangan adalah kesempatan untuk belajar, dan setiap kolaborasi adalah jalan untuk menciptakan harmoni antara ide dan hasil nyata. Saya berkomitmen untuk terus berkontribusi secara profesional melalui integritas dan semangat belajar yang berkelanjutan.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-[1440px] bg-[#f5f5f5] py-10 border-t-2 border-black flex justify-between items-center mt-12">
        <div className="w-[130px]">
          <Image src="/asset/logo/logo.png" alt="Logo" width={130} height={40} />
        </div>
        <p className="text-[14.4px] text-gray-500 flex-1 text-center">© 2025 Muhammad Syaiful</p>
        <div className="flex gap-[30px] items-center">
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
      </footer>
    </div>
  );
}
