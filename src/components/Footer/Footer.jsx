"use client";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { SiMaptiler } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="container mx-auto bg-black/10 backdrop-blur-lg py-10">
            <div className="mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand & Description */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            <SiMaptiler className="rotate-270 hover:text-[#98a869] transition-all" />
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Premium quality tiles for your dream home. Bringing
                            elegance and durability to every space.
                        </p>

                        {/* Social Media Icons */}
                        <div className="mt-6 flex gap-4">
                            <a
                                href="#"
                                className="hover:text-white transition-colors text-2xl"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors text-2xl"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors text-2xl"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors text-2xl"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#98a869] mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-[#EAF4FF]">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Shop All Tiles
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Featured Collections
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Sale
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#98a869] mb-5">
                            Categories
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Ceramic Tiles
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Porcelain Tiles
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Marble Effect
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Mosaic Tiles
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Wood Look Tiles
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#98a869] mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#e35336] mt-1 text-xl" />
                                <div>
                                    <p>123 Tile Street, Dhaka 1212</p>
                                    <p>Bangladesh</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-[#e35336] text-xl" />
                                <p>+880 1712-345678</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-[#e35336] text-xl" />
                                <p>info@tilecraft.com</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-[#e35336] hover:bg-bg-[#c7432a] px-6 py-3 rounded-xl transition-colors duration-200"
                            >
                                <FaEnvelope />
                                Send us a Message
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 TileCraft. All Rights Reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-gray-300 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 transition-colors"
                        >
                            Shipping Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
