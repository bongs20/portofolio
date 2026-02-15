
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center px-5">
      {/* Navbar */}
      <nav className="h-[100px] w-full max-w-[1228px] flex items-center justify-between bg-[#f5f5f5]">
        <div className="w-[130px]">
          <Image src="/asset/logo/logo.png" alt="Logo" width={130} height={40} />
        </div>
        <div className="flex gap-[60px] items-center">
          <p className="text-[29px] font-normal text-[#282828]"><strong>Home</strong></p>
          <Link href="/about" className="text-[29px] font-normal text-[#282828] no-underline">About</Link>
          <Link href="/contact" className="text-[29px] font-normal text-[#282828] no-underline">Contact</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full max-w-[1228px] h-[682px] grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-[30px]">
          <p className="text-[63px] leading-tight text-[#282828] font-normal">
            Halo, aku <strong>Muhammad Syaiful</strong>, seorang <em>tech enthusiast</em> juga pembelajar aktif yang juga suka mengajar.
          </p>
        </div>
        <div className="w-full h-[564px] rounded-[5px] overflow-hidden">
          <Image src="/asset/img/hero.png" alt="Muhammad Syaiful" width={600} height={564} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Projects */}
      <section className="w-full max-w-[1284px] mt-12">
        <h2 className="text-[45px] text-black font-normal mb-[27px]">Projects</h2>
        <div className="h-[2px] bg-black mb-[30px]"></div>
        <div className="relative">
          <div className="grid grid-cols-3 gap-[30px] mb-10">
            <div>
              <p className="text-[30px] text-black mb-[10px]">01 Penelitian</p>
              <div className="rounded-[5px] overflow-hidden h-[558px]">
                <Image src="/asset/img/project1.png" alt="Penelitian Project" width={400} height={558} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-[30px] text-black mb-[10px]">02 Pengabdian</p>
              <div className="rounded-[5px] overflow-hidden h-[558px]">
                <Image src="/asset/img/project2.png" alt="Pengabdian Project" width={400} height={558} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-[30px] text-black mb-[10px]">03 Solidaritas</p>
              <div className="rounded-[5px] overflow-hidden h-[558px]">
                <div className="h-[558px] overflow-hidden">
                  <Image src="/asset/img/project3.png" alt="Solidaritas Project" width={400} height={700} className="object-cover h-[700px] object-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section className="w-full max-w-[1284px] mt-12">
        <h2 className="text-[45px] text-black font-normal mb-[27px]">Pendidikan</h2>
        <div className="h-[2px] bg-black mb-[30px]"></div>
        <div className="grid grid-cols-2 gap-10 items-center py-10">
          <p className="text-[37px] leading-normal text-black font-normal">
            Bagi saya, pendidikan adalah alat membebaskan dan juga menyadarkan. Harmoni didalam jalan mendapatkan ilmu selalu membuat ku tersenyum
          </p>
          <div className="w-full h-[376px] rounded-[5px] overflow-hidden">
            <Image src="/asset/img/content.png" alt="YouTube Content" width={600} height={376} className="w-full h-full object-cover" />
          </div>
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
