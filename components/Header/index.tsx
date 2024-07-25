"use client";

import Image from "next/image";
import menuData from "./menuData";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { HamMenuState } from "@/store/HamMenu/atom";
import { HamMenu } from "./hamMenu";

export default function Header() {
    const router = useRouter();
    const [ isOpen, setIsOpen ] = useRecoilState(HamMenuState);

    function handleHamClick() {
      setIsOpen(!isOpen);
    }

    return (
      <>
        <header className="sticky top-0 z-[9999] bg-white">
          <div className="w-screen h-18 bg-black shadow flex justify-center items-center font-semibold lg:px-16 px-4">
            <nav className="flex items-center w-full mr-12 lg:mx-0">
                <div className="flex justify-between items-center w-full">
                    <div className="h-full w-40 text-white" onClick={() => router.push("/")}>
                      DRM Gurukooll
                    </div>
                    <div className={`h-8 w-8 lg:hidden flex cursor-pointer ${isOpen ? "hidden" : ""}`} onClick={handleHamClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </div>
                    <div className={`h-8 w-8 lg:hidden flex cursor-pointer ${isOpen ? "" : "hidden"}`} onClick={handleHamClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="hidden lg:flex justify-center items-center text-white">
                        {menuData.map((item, index) => (
                            <div key={index} className="m-8 cursor-pointer hover:text-primary" 
                            onClick={() => {
                              setIsOpen(false);
                              router.push(`${item.path}`);
                            }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:flex justify-between items-center text-black">
                    <button className="mt-2 bg-orange hover:bg-orange text-black py-1 px-4 rounded-full font-normal text-sm md:text-lg lg:text-xl flex items-center">
          REGISTER<span className="arrow-icon"> →</span> {/* Arrow icon here */}
        </button>
                    </div>
                </div>
            </nav> 
          </div>
        </header>
        <div className={`w-full h-full bg-white ${isOpen ? "lg:hidden" : "hidden"} overflow-y-hidden`}>
            <HamMenu/>
        </div>
      </>
    );
}
