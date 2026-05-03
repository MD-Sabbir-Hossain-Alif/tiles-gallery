import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
} from "react-icons/fa";
import { SiMaptiler, SiTile } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="container mx-auto bg-black/10 backdrop-blur-lg pt-4 sm:pt-8 md:pt-10">
            <div className="mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                    {/* logo & description */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex w-fit gap-2 text-[#C2B280] cursor-pointer transition-all text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
                        >
                            <SiMaptiler className="rotate-270" />
                            <SiTile />
                        </Link>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            Premium quality tiles for your dream home. Bringing
                            elegance and durability to every space.
                        </p>
                    </div>

                    {/* social media links */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#98a869] mb-4 sm:mb-5">
                            Social Links
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#EAF4FF]">
                            <li>
                                <Link
                                    href="www.facebook.com"
                                    className="inline-flex w-fit gap-2 items-center hover:text-white transition-colors"
                                >
                                    <FaFacebookF />
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="www.instagram.com"
                                    className="inline-flex w-fit gap-2 items-center hover:text-white transition-colors"
                                >
                                    <FaInstagram />
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="www.twitter.com"
                                    className="inline-flex w-fit gap-2 items-center hover:text-white transition-colors"
                                >
                                    <FaTwitter />
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="www.linkedin.com"
                                    className="inline-flex w-fit gap-2 items-center hover:text-white transition-colors"
                                >
                                    <FaLinkedin />
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="www.youtube.com"
                                    className="inline-flex w-fit gap-2 items-center hover:text-white transition-colors"
                                >
                                    <FaYoutube />
                                    Youtube
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* quick links */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#98a869] mb-4 sm:mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/all-tiles"
                                    className="hover:text-white transition-colors"
                                >
                                    All Tiles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-profile"
                                    className="hover:text-white transition-colors"
                                >
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="hover:text-white transition-colors"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/register"
                                    className="hover:text-white transition-colors"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* contact us */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#98a869] mb-4 sm:mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <FaMapMarkerAlt className="text-[#e35336] mt-1 text-lg sm:text-xl" />
                                <p>Tile Street, Mirpur 10, Dhaka</p>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3">
                                <FaPhoneAlt className="text-[#e35336] text-lg sm:text-xl" />
                                <p>+880 1712-345678</p>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3">
                                <FaEnvelope className="text-[#e35336] text-lg sm:text-xl" />
                                <p>info@tile.com</p>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8">
                            <Link
                                href=""
                                className="inline-flex items-center gap-2 text-sm sm:text-base bg-[#e35336] hover:bg-[#c7432a] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors duration-200"
                            >
                                <FaEnvelope />
                                Send us a Message
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-gray-600 py-4 sm:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500">
                    <p className="text-center md:text-left">
                        © 2026 Tile. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-3 md:mt-0">
                        <Link
                            href=""
                            className="hover:text-gray-300 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href=""
                            className="hover:text-gray-300 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href=""
                            className="hover:text-gray-300 transition-colors"
                        >
                            Shipping Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
