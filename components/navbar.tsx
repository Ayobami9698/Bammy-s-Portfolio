import Image from "next/image";
import { Home, Call, Designtools } from "iconsax-reactjs";

export default function Navbar() {
  return (
    <header className="w-full flex py-4 px-6 top-0 z-50">
      {/* Left: Logo (image + brand name) */}
      <div className="max-w-7xl mx-auto flex items-center justify-evenly">
        <div className="flex items-center">
        {/* Logo Image */}
        <Image
          src="/Images/myLogo.png" // Replace with your actual image path
          alt="Logo"
          width={200}
          height={200}
          className="py-0"
        />
      </div>

      {/* Right: Navigation Links */}
      <nav className=" flex space-x-10 justify-evenly font-semibold text-xl text-white">
        <a href="/" className=" hover:text-slate-300 flex"><Home/>Home</a>
        <a href="#projects" className="hover:text-slate-300 flex"><Designtools/>Projects</a>
        <a href="#footer" className="hover:text-slate-300 flex"><Call/>Contact</a>
      </nav>
      </div>
      
    </header>
  );
}