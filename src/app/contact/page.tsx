
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col">


      {/* Contact Section */}
      <section className="w-full max-w-screen-xl mx-auto px-4 mt-8 md:mt-12 contact-section">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-normal mb-4 md:mb-6">Say Hello</h2>
        <div className="h-[2px] bg-black mb-4 md:mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-6 md:mt-10">
          <div className="flex flex-col gap-6 md:gap-10">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black font-normal">Mau bekerja sama? Selalu bersemengat dalam projek terkkhususnya teknologi dan pendidikan.</p>
            <p className="text-base text-black">bisa juga dengan menghubungi <a href="mailto:2005syaiful@gmail.com" className="text-[#282828] underline cursor-pointer">2005syaiful@gmail.com</a></p>
          </div>

          <div className="flex flex-col">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal text-black">Nama *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <input type="text" className="p-3 text-sm border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f]" placeholder="First Name" />
                  <input type="text" className="p-3 text-sm border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f]" placeholder="Last Name" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal text-black">Kebutuhan *</label>
                <select className="p-3 text-sm border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f] cursor-pointer bg-white">
                  <option value="kolaborasi">Kolaborasi</option>
                  <option value="project">Project</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal text-black">Email *</label>
                <input type="email" className="p-3 text-sm border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f]" placeholder="syaiful@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal text-black">Message *</label>
                <textarea className="p-3 text-sm border border-[#ccc] rounded-[4px] font-poppins resize-y min-h-[120px] text-[#9f9f9f]" placeholder="Hello..."></textarea>
              </div>

              <button type="submit" className="self-start py-3 px-6 md:px-8 text-sm font-normal bg-white border border-black rounded-[4px] cursor-pointer font-poppins transition-all duration-300 hover:bg-black hover:text-white">Kirim</button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
