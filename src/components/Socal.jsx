import React from 'react';
import { motion } from 'framer-motion';

export function Socal({ socialHandles }) {
    // Check if socialHandles is undefined or null
    if (!socialHandles || socialHandles.length === 0) {
        return null; // Return null or some default content if socialHandles is empty
    }

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p>&copy; {new Date().getFullYear()} Your Website</p>
                </div>
                <div className="flex space-x-4">
                    {socialHandles.map(handle => (
                        <motion.a
                            key={handle._id}
                            href={handle.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.3 } }} // Increase size and rotate on hover
                            whileTap={{ scale: 0.9 }} // Decrease size on tap
                        >
                            <img
                                src={handle.image.url}
                                alt={handle.platform}
                                className="w-6 h-6"
                                style={{ filter: 'brightness(100%)' }} // Apply brightness filter to icons
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
