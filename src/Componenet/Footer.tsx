import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import footer from '../assets/NAv.png'


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16">
            <div className="w-[90%] mx-auto">

                {/* Top – 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Column 1 – Brand + description */}
                    <div className="space-y-3">
                        <img src={footer} alt="FlixList" className="h-12" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            🎬 FlixList — Discover movies and series, save your favorites,
                            and keep track of what you want to watch next.
                        </p>
                    </div>

                    {/* Column 2 – Quick Links */}
                    <div>
                        <h1 className="text-white font-semibold mb-4 text-base">Quick Link</h1>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
                            <li><a href="#movie" className="hover:text-pink-400 transition">Movies</a></li>
                            <li><a href="#series" className="hover:text-pink-400 transition">Series</a></li>
                        </ul>
                    </div>

                    {/* Column 3 – Features */}
                    <div>
                        <h1 className="text-white font-semibold mb-4 text-base">Features</h1>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-pink-400 transition">Browse Movies</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition">Browse Series</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition">Add to Watchlist</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition">Manage Watchlist</a></li>
                        </ul>
                    </div>

                    {/* Column 4 – Connect */}
                    <div>
                        <h1 className="text-white font-semibold mb-4 text-base">Connect</h1>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://github.com/sm-sazzad"
                                    className="flex items-center gap-2 hover:text-pink-400 transition">
                                    <FaGithub className="text-lg" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sm-sazzad/"
                                    className="flex items-center gap-2 hover:text-pink-400 transition">
                                    <FaLinkedin className="text-lg" />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/sazzad.hossain.5758/"
                                    className="flex items-center gap-2 hover:text-pink-400 transition">
                                    <FaFacebook className="text-lg" />
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom – copyright */}
                <div className="border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} FlixList. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;