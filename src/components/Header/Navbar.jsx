"use client";

import { useState } from "react";
import { Button, Spinner } from "@heroui/react";
import Link from "next/link";
import { SiMaptiler, SiTile } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "./NavLink";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import userAvatar from "@/assets/user.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // console.log(user)

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-accent bg-[#272757]/50 backdrop-blur-sm shadow-sm">
            <header className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6">
                <div className="flex-1 flex justify-start">
                    <Link
                        href="/"
                        className="inline-flex w-fit gap-1 sm:gap-2 cursor-pointer hover:text-[#C2B280] transition-all font-bold text-xl sm:text-2xl md:text-3xl"
                    >
                        <SiMaptiler className="rotate-270" />
                        <SiTile />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-3 lg:gap-4 text-sm md:text-base lg:text-lg font-semibold">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/all-tiles">All Tiles</NavLink>
                    </li>
                    <li>
                        <NavLink href="/my-profile">My Profile</NavLink>
                    </li>
                </ul>

                <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3 md:gap-4">
                    {isPending ? (
                        <Spinner className="hidden md:block" size="sm" />
                    ) : user ? (
                        <div className="flex-1 hidden md:flex justify-end items-center gap-2">
                            <div className="flex justify-end items-center gap-2">
                                <h2 className="hidden lg:block text-sm md:text-base lg:text-lg font-semibold">
                                    {/* Hello */}
                                    <Link
                                        href="/my-profile"
                                        className="hover:text-[#C2B280] ml-2"
                                    >
                                        {user.name}
                                    </Link>
                                </h2>
                                <Link
                                    href="/my-profile"
                                    className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 border-2 hover:border-[#C2B280] rounded-full overflow-hidden"
                                >
                                    <Image
                                        src={user?.image || userAvatar}
                                        alt="User avatar"
                                        height={40}
                                        width={40}
                                        className="object-cover w-full h-full"
                                    />
                                </Link>
                            </div>
                            <Button
                                onClick={async () => await authClient.signOut()}
                                className="hidden md:block text-sm bg-transparent hover:bg-[#e35336] border border-[#e35336] rounded-md font-semibold transition-all"
                            >
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            {/* Desktop Login */}
                            <Link href="/login">
                                <Button className="hidden md:block text-sm bg-transparent hover:bg-[#e35336] border border-[#e35336] rounded-md font-semibold transition-all">
                                    Login
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* hamburger menu  */}
                    <button
                        className="md:hidden text-xl sm:text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </header>

            {/* backdrop */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-14 sm:top-16 right-0 sm:right-4 max-w-50 z-40 w-full border border-accent rounded-lg bg-[#272757]/80 backdrop-blur-sm shadow-lg p-3 sm:p-4 transform transition-all duration-300 ease-in-out ${
                    menuOpen
                        ? "translate-y-0 opacity-100 scale-100"
                        : "-translate-y-5 opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col gap-2 sm:gap-4 text-base sm:text-lg font-semibold">
                    {isPending ? (
                        <Spinner className="hidden md:block" size="sm" />
                    ) : user ? (
                        <li className="flex items-center gap-2 sm:gap-3">
                            <Link
                                href="/my-profile"
                                className="w-7 h-7 sm:w-8 sm:h-8 border-2 hover:border-[#e35336] rounded-full overflow-hidden"
                            >
                                <Image
                                    src={user?.image || userAvatar}
                                    alt="User avatar"
                                    width={32}
                                    height={32}
                                    className="object-cover w-full h-full"
                                />
                            </Link>
                            <Link
                                href="/my-profile"
                                className="hover:text-[#C2B280] ml-1 font-medium text-sm sm:text-base"
                            >
                                {user.name}
                            </Link>
                        </li>
                    ) : (
                        <></>
                    )}

                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/all-tiles">All Tiles</NavLink>
                    </li>
                    <li>
                        <NavLink href="/my-profile">My Profile</NavLink>
                    </li>

                    {user ? (
                        <li>
                            <Button
                                onClick={() => authClient.signOut()}
                                className="w-full text-sm bg-transparent hover:bg-[#e35336] border border-[#e35336] rounded-md font-semibold"
                            >
                                Logout
                            </Button>
                        </li>
                    ) : (
                        <li>
                            <Link href="/login">
                                <Button className="w-full text-sm bg-transparent hover:bg-[#e35336] border border-[#e35336] rounded-md font-semibold">
                                    Login
                                </Button>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
