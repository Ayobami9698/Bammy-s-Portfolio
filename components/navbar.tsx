import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-2 py-0 top-0 z-50">
      {/* Left: Logo (image + brand name) */}
      <div className="flex items-center space-x-3">
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
      <nav className="flex items-center font-semibold text-lg text-white">
        <a href="/" className="mx-4 hover:text-slate-300">🏠 Home</a>
        <a href="#projects" className="hover:text-slate-300">💻 Projects</a>
        <a href="#footer" className="hover:text-slate-300">☎️ Contact</a>
      </nav>
    </header>
  );
}