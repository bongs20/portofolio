
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center px-5">
      {/* Navbar */}
      <nav className="h-[100px] w-full max-w-[1228px] flex items-center justify-between bg-[#f5f5f5]">
        <div className="w-[130px]">
          <Image src="/asset/logo/logo.png" alt="Logo" width={130} height={40} />
        </div>
        <div className="flex gap-[60px] items-center">
          <Link href="/" className="text-[29px] font-normal text-[#282828] no-underline">Home</Link>
          <Link href="/about" className="text-[29px] font-normal text-[#282828] no-underline">About</Link>
          <p className="text-[29px] font-normal text-[#282828]"><strong>Contact</strong></p>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="w-full max-w-[1284px] mt-12 contact-section">
        <h2 className="text-[45px] text-black font-normal mb-[27px]">Say Hello</h2>
        <div className="h-[2px] bg-black mb-[30px]"></div>

        <div className="grid grid-cols-2 gap-[60px] mt-10">
          <div className="flex flex-col gap-10">
            <p className="text-[30px] leading-relaxed text-black font-normal">Mau bekerja sama? Selalu bersemengat dalam projek terkkhususnya teknologi dan pendidikan.</p>
            <p className="text-[16px] text-black">bisa juga dengan menghubungi <a href="mailto:2005syaiful@gmail.com" className="text-[#282828] underline cursor-pointer">2005syaiful@gmail.com</a></p>
          </div>

          <div className="flex flex-col">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-normal text-black">Nama *</label>
                <div className="grid grid-cols-2 gap-[15px]">
                  <input type="text" className="p-3 text-[14px] border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f]" placeholder="First Name" />
                  <input type="text" className="p-3 text-[14px] border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f]" placeholder="Last Name" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-normal text-black">Kebutuhan *</label>
                <select className="p-3 text-[14px] border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f] cursor-pointer bg-white">
                  <option value="kolaborasi">Kolaborasi</option>
                  <option value="project">Project</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-normal text-black">Email *</label>
                <input type="email" className="p-3 text-[14px] border border-[#ccc] rounded-[4px] font-poppins text-[#9f9f9f]" placeholder="syaiful@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-normal text-black">Message *</label>
                <textarea className="p-3 text-[14px] border border-[#ccc] rounded-[4px] font-poppins resize-y min-h-[120px] text-[#9f9f9f]" placeholder="Hello..."></textarea>
              </div>

              <button type="submit" className="self-start py-3 px-[30px] text-[14px] font-normal bg-white border border-black rounded-[4px] cursor-pointer font-poppins transition-all duration-300 hover:bg-black hover:text-white">Kirim</button>
            </form>
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
