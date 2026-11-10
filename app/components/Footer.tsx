import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-citrus-dark text-white mt-16 rounded-t-[3rem] pt-12 pb-8 px-6 lg:px-12 border-t-8 border-citrus relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-citrus rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-citrus rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        {" "}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20"
                  y="30"
                  width="22"
                  height="22"
                  rx="4"
                  fill="#1F2937"
                ></rect>
                <rect
                  x="58"
                  y="30"
                  width="22"
                  height="22"
                  rx="4"
                  fill="#1F2937"
                ></rect>
                <path
                  d="M 35 65 Q 50 80 65 65"
                  stroke="#1F2937"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                ></path>
              </svg>
            </div>
            <span className="text-2xl font-extrabold text-white tracking-tight">
              My Fav Boardgames
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <Link
              href="/rules"
              className="text-gray-300 hover:text-citrus font-semibold transition-colors"
            >
              Rules of site
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-citrus font-semibold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-citrus font-semibold transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="text-center md:text-right bg-white/5 p-5 rounded-3xl backdrop-blur-sm border border-white/10">
          <h4 className="text-green-citrus font-bold mb-2 uppercase tracking-wider text-sm">
            Official shopping partners
          </h4>
          <ul className="flex flex-wrap gap-3 justify-center md:justify-end text-sm font-semibold text-gray-200">
            <li className="bg-white/10 px-3 py-1 rounded-full hover:bg-citrus hover:text-citrus-dark cursor-pointer transition-colors">
              <a>MeepleMart</a>
            </li>
            <li className="bg-white/10 px-3 py-1 rounded-full hover:bg-citrus hover:text-citrus-dark cursor-pointer transition-colors">
              <a>DiceDepot</a>
            </li>
            <li className="bg-white/10 px-3 py-1 rounded-full hover:bg-citrus hover:text-citrus-dark cursor-pointer transition-colors">
              <a>BoardGame Heaven</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
