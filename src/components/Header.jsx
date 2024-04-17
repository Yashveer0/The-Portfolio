import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Header({ name, avatarUrl, darkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const myRef = useRef(null);

    const scrollToComponent = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`bg-blue-500 z-20  sticky top-0 text-white p-4 flex justify-between items-center`}>
            <div className="flex items-center">
                {avatarUrl && <img src={avatarUrl} alt="Avatar" className="rounded-full w-8 h-8 mr-2" />}
                <div>{name}</div>
            </div>
            <nav className="flex flex-col md:flex-row relative">
                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />} {/* Menu toggle icon */}
                </button>
                <ul
                    className={`  flex mr-[8rem] md:rounded-full  flex-col md:flex-row absolute top-full left-[-6rem] bg-blue-500 dark:bg-blue-800 p-4 md:p-3 md:relative md:flex md:items-center md:space-x-4 ${menuOpen ? 'block' : 'hidden'}`}
                >
                    <li className="py-2 hover:underline hover:text-red-500 md:py-0 transition-hover duration-150">Home</li>

                    <li className="py-2 hover:underline hover:text-red-500 md:py-0 transition-hover duration-150" >About</li>


                    <li className="py-2 hover:underline hover:text-red-500 md:py-0 transition-hover duration-150">Let'talk</li>
                    <Link to="/#skill">
                    <li className="py-2 hover:underline hover:text-red-500 md:py-0 transition-hover duration-150">Skills</li>
                    </Link>
                    
                        <li className="py-2 hover:underline hover:text-red-500 md:py-0 transition-hover duration-150">Projects</li>
                   
                    <li className="py-2 hover:underline hover:text-red-500 md:py-0 transition-hover duration-150">Service</li>

                    <li className="py-2 hover:underline hover:text-red-500 md:py-0 transition-hover duration-150">Timeline</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
