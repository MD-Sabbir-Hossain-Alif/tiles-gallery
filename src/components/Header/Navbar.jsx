"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { SiMaptiler, SiTile } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "./NavLink";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-accent bg-[#272757]/50 backdrop-blur-sm shadow-sm">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex-1 flex justify-start">
                    <Link
                        href="/"
                        className="inline-flex w-fit gap-2 cursor-pointer hover:text-[#98a869] transition-all font-bold text-3xl"
                    >
                        <SiMaptiler className="rotate-270" />
                        <SiTile />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-4 text-lg font-semibold">
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

                {/* Right side */}
                <div className="flex-1 flex justify-end items-center gap-4">
                    {/* Desktop Login */}
                    <Link href="/login">
                        <Button className="hidden md:block bg-transparent hover:bg-[#e35336] border border-[#e35336] rounded-md font-semibold transition-all">
                            Login
                        </Button>
                    </Link>

                    {/* Hamburger Icon */}
                    <button
                        className="md:hidden text-2xl"
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
                className={`md:hidden fixed top-16 right-4 max-w-56 z-40 w-full border border-accent rounded-lg bg-[#272757]/80 backdrop-blur-sm shadow-lg p-4 transform transition-all duration-300 ease-in-out ${
                    menuOpen
                        ? "translate-y-0 opacity-100 scale-100"
                        : "-translate-y-5 opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col gap-4 text-lg font-semibold">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/all-tiles">All Tiles</NavLink>
                    </li>
                    <li>
                        <NavLink href="/my-profile">My Profile</NavLink>
                    </li>
                    <li>
                        <Link href="/login">
                            <Button className="w-full bg-transparent hover:bg-[#e35336] border border-[#e35336] rounded-md font-semibold">
                                Login
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
