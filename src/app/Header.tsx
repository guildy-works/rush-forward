import { useState } from 'react';
import Link from "next/link";
import LogoImg from "@/assets/logo-dtl.png";
import Image from "next/image";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { href: "/", label: "TOP" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Service" },
        { href: "/news", label: "News" },
        { href: "/company", label: "Company" },
        { href: "/contacts", label: "Contact" },
    ];

    return (
        <div className="p-4 bg-white  flex flex-col">

            <div className="mt-auto mxl-auto h-20 fixed top-0 w-full z-50">
                <div className="flex items-center p-5">
                    <Image src={LogoImg} alt='logo' className='w-28' style={{filter:"saturate(0.4) hue-rotate(180deg)"}}/>

                    <input id="checkbox1" type="checkbox" className="hidden peer" />
                    <label htmlFor="checkbox1" className="md:hidden cursor-pointer hmbgbutton">
                        <span className="border-a hmbgborder"></span>
                        <span className="border-b hmbgborder"></span>
                        <span className="border-c hmbgborder"></span>
                    </label>
                    <nav className="Menuhnbg md:flex ml-auto gap-6 justify-end pr-6">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-gray-600 hover:text-color3 transition duration-300 font-jost font-normal"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

        </div>
    );
};