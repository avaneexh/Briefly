import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [category, setCategory] = useState('general');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleCategory = (newCategory) => {
        setCategory(newCategory);
        navigate(`/NewsGrid/${newCategory}`);
        setIsOpen(false); // Close the menu after selecting a category
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <nav className="bg-gradient-to-r from-gray-800 to-blue-950 px-4 h-24 py-7 w-full z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo or Title */}
                <div
                    className="text-orange-200 text-3xl drop-shadow-xl font-extrabold cursor-pointer"
                    onClick={handleReload}
                >
                    Briefly
                </div>

                {/* Menu for larger screens */}
                <ul className="hidden md:flex space-x-8 text-orange-200 font-bold">
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'general' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('general')}
                    >
                        General
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'technology' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('technology')}
                    >
                        Technology
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'sports' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('sports')}
                    >
                        Sports
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'entertainment' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('entertainment')}
                    >
                        Entertainment
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'health' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('health')}
                    >
                        Health
                    </li>
                </ul>

                {/* Hamburger menu for small screens */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <FaTimes className="text-white text-2xl" />
                        ) : (
                            <FaBars className="text-white text-2xl" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <FaTimes className="text-white text-2xl" />
                    </button>
                </div>
                <ul className="mt-24 space-y-4 text-center text-orange-200 font-semibold">
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'general' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('general')}
                    >
                        General
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'technology' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('technology')}
                    >
                        Technology
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'sports' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('sports')}
                    >
                        Sports
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'entertainment' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('entertainment')}
                    >
                        Entertainment
                    </li>
                    <li
                        className={`hover:text-white hover:underline cursor-pointer ${category === 'health' ? 'text-white' : ''}`}
                        onClick={() => handleCategory('health')}
                    >
                        Health
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
