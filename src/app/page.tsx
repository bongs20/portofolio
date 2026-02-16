
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="w-full max-w-screen-xl mx-auto px-4 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-3xl md:text-5xl lg:text-6xl leading-tight text-[#282828] font-normal">
            Halo, aku <strong>Muhammad Syaiful</strong>, seorang <em>tech enthusiast</em> juga pembelajar aktif yang juga suka mengajar.
          </p>
        </div>
        <div className="w-full h-auto md:h-[564px] rounded-[5px] overflow-hidden">
          <Image src="/asset/img/hero.png" alt="Muhammad Syaiful" width={600} height={564} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Projects */}
      <section className="w-full max-w-screen-xl mx-auto px-4 mt-8 md:mt-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-normal mb-4 md:mb-6">Projects</h2>
        <div className="h-[2px] bg-black mb-4 md:mb-6"></div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
            <div>
              <p className="text-xl md:text-2xl text-black mb-2 md:mb-3">01 Penelitian</p>
              <div className="rounded-[5px] overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[558px]">
                <Image src="/asset/img/project1.png" alt="Penelitian Project" width={400} height={558} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-black mb-2 md:mb-3">02 Pengabdian</p>
              <div className="rounded-[5px] overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[558px]">
                <Image src="/asset/img/project2.png" alt="Pengabdian Project" width={400} height={558} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-black mb-2 md:mb-3">03 Solidaritas</p>
              <div className="rounded-[5px] overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[558px]">
                <div className="h-full overflow-hidden">
                  <Image src="/asset/img/project3.png" alt="Solidaritas Project" width={400} height={700} className="object-cover h-full object-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="w-full max-w-screen-xl mx-auto px-4 mt-8 md:mt-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-normal mb-4 md:mb-6">Pendidikan</h2>
        <div className="h-[2px] bg-black mb-4 md:mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center py-8 md:py-10">
          <p className="text-xl md:text-2xl lg:text-3xl leading-normal text-black font-normal">
            Bagi saya, pendidikan adalah alat membebaskan dan juga menyadarkan. Harmoni didalam jalan mendapatkan ilmu selalu membuat ku tersenyum
          </p>
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[376px] rounded-[5px] overflow-hidden">
            <Image src="/asset/img/content.png" alt="YouTube Content" width={600} height={376} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

    </div>
  );
}
