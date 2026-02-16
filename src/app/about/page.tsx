
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">


      {/* About Me Section */}
      <section className="w-full max-w-screen-xl mx-auto px-4 mt-8 md:mt-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-normal mb-4 md:mb-6">About Me</h2>
        <div className="h-[2px] bg-black mb-4 md:mb-6"></div>
        <div className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black font-normal">
          <p className="mb-5">Saya adalah seorang pembelajar aktif yang berdedikasi pada pengembangan diri dan penciptaan solusi yang berdampak. Dengan ketertarikan yang mendalam pada dunia teknologi dan inovasi, saya selalu berusaha untuk memadukan ketelitian riset dengan implementasi yang praktis dan efisien.</p>
          <p className="mb-5">Pengalaman saya dalam berbagai proyek penelitian dan pengabdian telah membentuk pola pikir yang analitis namun tetap humanis. Saya percaya bahwa kemajuan sejati terjadi ketika pengetahuan tidak hanya berhenti di teori, tetapi mampu menjadi alat untuk memberdayakan dan menginspirasi orang lain.</p>
          <p className="mb-5">Bagi saya, setiap tantangan adalah kesempatan untuk belajar, dan setiap kolaborasi adalah jalan untuk menciptakan harmoni antara ide dan hasil nyata. Saya berkomitmen untuk terus berkontribusi secara profesional melalui integritas dan semangat belajar yang berkelanjutan.</p>
        </div>
      </section>


    </div>
  );
}
