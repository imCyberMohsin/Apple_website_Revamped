import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaApple } from 'react-icons/fa';

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
        { icon: <FaFacebook className="w-6 h-6" />, href: '#' },
        { icon: <FaTwitter className="w-6 h-6" />, href: '#' },
        { icon: <FaInstagram className="w-6 h-6" />, href: '#' },
        { icon: <FaLinkedin className="w-6 h-6" />, href: '#' },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-black text-white p-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">About</h4>
                        <ul>
                            {footerData.about.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:underline">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Support</h4>
                        <ul>
                            {footerData.support.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:underline">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Legal</h4>
                        <ul>
                            {footerData.legal.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:underline">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            {footerData.followUs.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm">
                    <p className="mt-2">Powered by <FaApple className="inline-block text-2xl align-middle ml-1" /></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;