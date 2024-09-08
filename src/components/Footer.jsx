import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaApple } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const footerData = {
    about: [
        { name: 'Company Info', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Investor Relations', href: '#' },
    ],
    support: [
        { name: 'Contact Us', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Product Support', href: '#' },
        { name: 'Service & Repair', href: '#' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Legal Information', href: '#' },
        { name: 'Accessibility', href: '#' },
    ],
    followUs: [
        { icon: <FaFacebook className="w-5 h-5" />, href: '#' },
        { icon: <FaXTwitter className="w-5 h-5" />, href: '#' },
        { icon: <FaInstagram className="w-5 h-5" />, href: '#' },
        { icon: <FaLinkedin className="w-5 h-5" />, href: '#' },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-300 py-10 text-center">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-zinc-700 pb-8">
                    {/* About Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">About</h4>
                        <ul className="space-y-2">
                            {footerData.about.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:text-zinc-100 transition-colors duration-200">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
                        <ul className="space-y-2">
                            {footerData.support.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:text-zinc-100 transition-colors duration-200">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2">
                            {footerData.legal.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:text-zinc-100 transition-colors duration-200">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                        <div className="flex space-x-4 justify-center">
                            {footerData.followUs.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-center items-center gap-5 mt-8 text-sm">
                    <p>&copy; 2024 YourCompany. All rights reserved.</p>
                    <p className="flex items-center">
                        Powered by
                        <FaApple className="inline-block text-2xl text-white ml-2" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;