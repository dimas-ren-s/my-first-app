"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./theme-toggle";
import Image from 'next/image'

function makeNavbarListUI(list: any[]) {
    const pathname = usePathname();
    const router = useRouter();
    return (<div className="flex justify-between items-center">
        <ul className="flex items-center">
            <Link href="/" className="flex items-center">
                <Image
                    src="./Logo/Icon.svg"
                    alt="StudyKita Logo"
                    className="dark:invert ml-4 w-8 h-auto"
                    width={0}
                    height={0}
                    priority
                />
                <span className="text-3xl -mt-2 mx-2">/</span>
                <Image
                    src="./Logo/Text Studykita.svg"
                    alt="StudyKita Logo"
                    className="dark:invert mr-2 w-24 h-auto"
                    width={0}
                    height={0}
                    priority
                />
            </Link>
            {
                list.map(nav => (
                    <Link key={crypto.randomUUID()} href={nav.url} className={`${pathname === nav.url ? "text-blue-500" : ""} hover:text-blue-500`}> {/* Kalau mau menambahkan / sebelum */}
                        <li className="mx-4 text-md dark:text-[#dad1d1]">
                            {nav.nama}
                        </li>
                    </Link>
                ))
            }
        </ul >
        <div className="flex flex-row items-center gap-2  mr-4">
            <ModeToggle />
            <button onClick={() => router.push("/login")} className="bg-[#02020d] dark:bg-white px-2 h-8 rounded-lg shadow-md">
                <span className="text-md dark:text-black text-white">Login</span>
            </button>
        </div>
    </div >)
}

export default function Navbar() {
    const listNavbar = [
        { nama: 'Home', url: '/' },
        { nama: 'About', url: '/about' },
        { nama: 'Projects', url: '/projects' },
        { nama: 'Contact', url: '/contact' }
    ];

    return (
        <nav className="p-2 max-w-screen">
            {makeNavbarListUI(listNavbar)}
        </nav>
    );
}