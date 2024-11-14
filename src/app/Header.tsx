import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from "next/link";

import LogoImg from "@/assets/logo-dtl.png";
import Image from "next/image";
import { useScrollState } from '@/libs/ScrollTrigger';
import { FadeAndSlideAnimation } from '@/libs/Animations/FadeAndSlideAnimation';
import { MdClose, MdMenu } from 'react-icons/md';
import { SnsLinkList } from '@/components/SnsLinkList';
import clsx from 'clsx';

type MenuItem = {
    href: string;
    label: string;
    label2?: string; // サブタイトル
    childlen?: MenuItem[]; // 子要素がある場合
};

export const menuItems: MenuItem[] = [
    { href: "/", label: "TOP" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Service",childlen:[
        { href: "/service/producing", label: "Producing" },
        { href: "/service/gastronomy-tourism", label: "Gastronomy Tourism" },
        { href: "/service/hotel", label: "Hotel" },
        { href: "/service/restaurant", label: "Restaurant" },
    ] },
    { href: "/news", label: "News" },
    { href: "/company", label: "Company" },
    { href: "/contacts", label: "Contact" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const state = useScrollState()

    return (
        <>
            <header className="flex items-center sticky top-0 mt-0 md:mt-48 bg-white/60 backdrop-blur-lg z-20">
                {
                    <Link href="/" className={clsx('transition-opacity duration-200', state.scrollTop > 300 ? "opacity-100" : "opacity-0")}>
                        <Image className="ml-8" src={LogoImg} alt="Rush Forward" width={80} height={80} />
                    </Link>
                }


                {/* Desktop */}
                <nav className="hidden w-full md:flex gap-6 justify-end py-6 px-20">

                    <div className='ml-auto' />
                    {menuItems.map((item, index) => {
                        return (
                            <div className="relative group" key={index} >
                                <Link
                                    href={item.href}
                                    className="text-navigation py-2 group-hover:text-color3 group-hover:border-b-2 border-color3 transition duration-300"
                                >
                                    {item.label}
                                </Link>

                                {/* {item.child?.length && (
                                    <div className="absolute z-10 hidden top-6 group-hover:block group-hover:border-t-2 border-color3 w-max transition duration-300">
                                        <div className="p-4 bg-white rounded-sm w-full flex flex-col">
                                            {
                                                item.child?.map((child, index) => (
                                                    <Link
                                                        key={index}
                                                        href={child.href}
                                                        className="text-navigation hover:text-color3 transition duration-300"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))
                                            }

                                        </div>
                                    </div>
                                )} */}
                            </div>
                        )
                    })}
                </nav>

                {/* Mobile */}
                <nav className="flex md:hidden w-full gap-6 justify-end py-2">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="flex items-center justify-center p-2 w-12 h-12 rounded-full text-color3 hover:bg-color3/10">
                        <MdMenu size={48} />
                    </button>

                    <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>
        </>
    );
};

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({ isOpen, setIsOpen, children }: React.PropsWithChildren<Props>) => {
    const close = () => setIsOpen(false);

    return (

        <Dialog transition open={isOpen} as="div"
            className="relative z-50 focus:outline-none transition duration-300 ease-out data-[closed]:opacity-0"
            onClose={close}>
            <div className="fixed inset-0 z-50">
                <DialogPanel className="relative bg-white/80 backdrop-blur-lg w-full h-screen p-4 flex flex-col items-center">

                    <Image className="mb-8" src={LogoImg} alt="Rush Forward" width={120} height={120} />

                    <nav className="flex flex-col gap-6 h-full justify-center items-start">
                        {menuItems.map((item, index) => (
                            <FadeAndSlideAnimation in key={item.href} delay={index * 50}>
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    key={index}
                                    href={item.href}
                                    className="text-navigation hover:text-color3 transition duration-300"
                                >
                                    {item.label}
                                </Link>
                                {/* {
                                    item.child?.length && (
                                        item.child?.map(
                                            (child, index) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="ml-4 text-navigation hover:text-color3 transition duration-300"
                                                >
                                                    {child.label}
                                                </Link>
                                            )
                                        )
                                    )
                                } */}
                            </FadeAndSlideAnimation>
                        ))}
                    </nav>
                    <Image className="mb-8" src={LogoImg} alt="Match-Bond" width={120} height={120} />

                    <SnsLinkList />

                    <button data-collapse-toggle="navbar-hamburger"
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="absolute top-4 right-4 inline-flex items-center justify-center p-2 w-12 h-12 text-sm rounded-full text-color3 hover:bg-color3/10"
                    >
                        <MdClose size={24} />
                    </button>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
