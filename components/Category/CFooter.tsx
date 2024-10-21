import Image from "next/image";
import Link from "next/link";

const CFooter = () => {
  return (
    <div className="bg-gradient-to-r from-[#FCEED5] to-[#FFE7BA] py-20 px-10 md:px-32 font-sans">
      <div className="flex flex-col md:flex-row items-center bg-[#003459] rounded-xl p-8 mb-10">
        <span className="text-white font-bold text-xl md:text-2xl md:mr-auto">
          Register Now So You Don&apos;t Miss Our Programs
        </span>
        <div className="flex items-center bg-white rounded-lg gap-3 p-3 mt-5 md:mt-0">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-gray-300 rounded-md py-3 px-5 w-full md:w-auto outline-none"
          />
          <button className="bg-[#003459] text-white rounded-md py-3 px-5 font-medium hover:bg-[#00497a] transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
      <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-8">
          <Link
            href="#home"
            className="text-[#00171f] font-medium hover:text-[#003459] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#category"
            className="text-[#00171f] font-medium hover:text-[#003459] transition-colors"
          >
            Category
          </Link>
          <Link
            href="#about"
            className="text-[#00171f] font-medium hover:text-[#003459] transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-[#00171f] font-medium hover:text-[#003459] transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-3 mt-5 md:mt-0">
          <Image src="/images/fb.png" alt="Facebook" width={24} height={24} />
          <Image
            src="/images/twitter.png"
            alt="Twitter"
            width={24}
            height={24}
          />
          <Image
            src="/images/insta.png"
            alt="Instagram"
            width={24}
            height={24}
          />
          <Image
            src="/images/youtube.png"
            alt="YouTube"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#667479]">
        <span>© 2022 Monito. All rights reserved.</span>
        <Image
          src="/images/monito.png"
          alt="Monito Logo"
          width={115}
          height={40}
          className="my-4 md:my-0"
        />
        <div className="flex gap-5">
          <Link href="#terms" className="hover:text-gray-800 transition-colors">
            Terms of Service
          </Link>
          <Link
            href="#privacy"
            className="hover:text-gray-800 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CFooter;
