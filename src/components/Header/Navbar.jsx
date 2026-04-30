import { Button } from "@heroui/react";
import Link from "next/link";
import { SiMaptiler } from "react-icons/si";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <>
            {/* With right-aligned content */}
            <nav className="sticky top-0 z-40 w-full border-b border-accent bg-[#272757]/50 backdrop-blur-sm shadow-sm">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex-1 flex justify-start">
                        <Link
                            href="/"
                            className="hover:text-[#98a869] transition-all font-bold text-3xl"
                        >
                            <SiMaptiler className="rotate-270" />
                        </Link>
                    </div>
                    <ul className=" flex items-center gap-4 text-lg font-semibold">
                        <li className="hover:text-[#98a869] transition-all">
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li className="hover:text-[#98a869] transition-all">
                            <NavLink href="/all-tiles">All Tiles</NavLink>
                        </li>
                        <li className="hover:text-[#98a869] transition-all">
                            <NavLink href="/my-profile"> My Profile</NavLink>
                        </li>
                    </ul>
                    <div className="flex-1 flex justify-end  items-center gap-4">
                        <Button className="bg-[#e35336] border rounded-md font-semibold">
                            Login
                        </Button>
                    </div>
                </header>
            </nav>
        </>
    );
};

export default Navbar;
