
import Image from "next/image";
import NavLinks from "./NavLinks";


const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-end px-4 py-4">

        {/* Center - Logo + Website Info */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
          <Image
            src="/logo (1).webp"
            alt="Bangla News 24 Logo"
            width={50}
            height={50}
            className="rounded-xl"
          />

          <div>
            <h1 className="font-serif text-3xl font-bold text-red-600">
              Bangla News 24
            </h1>

            <p className="text-sm text-gray-500">
              {date}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-red-600">
            সাইন ইন
          </button>

          <button className="btn border-none bg-red-600 px-5 text-white hover:bg-red-700">
            সাইন আপ
          </button>
        </div>

      </div>

      <NavLinks />
    </header>
  );
};

export default Header;