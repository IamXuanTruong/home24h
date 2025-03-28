"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    const code = prompt("Nhập mã để truy cập trang:");
    if (code === "8888") {
      router.push("/component/admin");
    } else {
      alert("Mã không đúng!");
    }
  };
  return (
    <div
      className="w-full flex items-center justify-center 
    bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,1)_0%,_rgba(0,0,0,1)_100%)] p-5"
    >
      <div className="w-[80%] flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className="text-3xl font-extrabold tracking-wide 
          drop-shadow-[0_5px_25px_rgba(255,255,255,0.8)] 
          bg-gradient-to-r from-yellow-300 via-white to-yellow-300 
          bg-clip-text text-transparent 
          animate-pulse font-[Geist]"
          >
            VirtualHome24H
          </div>
        </div>
        <div className="ml-auto">
          <ul className="flex gap-6 text-yellow-300 text-[16px] font-semibold">
            <li>
              <a href="" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <Link href="/component/library" className="hover:text-white transition duration-300">
                Library
              </Link>
            </li>
            <li>
              <a href="" className="text-yellow-300transition duration-300">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/aaaa"
                onClick={handleClick}
                className="hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 text-yellow-300 hover:text-white"
                  fill="currentColor"
                >
                  <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
