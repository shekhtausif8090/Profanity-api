import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white/75 backdrop-blur-xl z-50">
      <div className="max-w-7xl p-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src="/swear-emoji.png" className="h-6 w-6 mr-1" alt="image" />
            <Link
              href="https://github.com/shekhtausif8090/Profanity-api"
              className="text-xl font-bold tracking-tight"
            >
              ProfanityAPI
            </Link>
          </div>

          <div>
            <Link href="" className="">
              <span className="text-base font-medium">Star Github</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
