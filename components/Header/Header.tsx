"use client"
import { CSSProperties, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Button/Button";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

export default function Header() {

    const [isFloatingHeader, setIsFloatingHeader] = useState(false);

    const handleNavigation = (e: { currentTarget: any; }) => {
        const window = e.currentTarget;

        setIsFloatingHeader(window.scrollY > 10)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const handleReservation = () => {

    }

    const headerStyle: CSSProperties = {
        transition: "0.5s ease",
        ...isFloatingHeader ? {
            backgroundColor: 'rgb(246, 236, 232, .6)',
            borderRadius: '12px',
            backdropFilter: 'blur(2px)',
            boxShadow: '0 4px 30px rgba(255,255,255, .2)',
            WebkitBackdropFilter: 'blur(2px)',
        } : {
        }
    }
    return (


        <header
            className="fixed z-10  w-full mx-auto h-16 grid grid-cols-12 p-2 px-4">
            <HeaderMenu />
            <span className="relative col-span-6 h-16">


                <Logo
                    alt="logo_entreprise"
                    link="#"
                    width={255}
                    linkProps='flex justify-center'
                    className={twMerge('-my-14 object-center', isFloatingHeader && 'brightness-50')}
                    src="/assets/logo_dani_white.png"
                />
            </span>

            <Button variant="outlined" className="hidden sm:block  min-w-[100px] text-zeus-100 col-span-3">
                <span className="block md:hidden">
                    Contato
                </span>
                <span className="hidden md:block">
                    Entre em contato
                </span>
            </Button>
        </header>



    )
}

