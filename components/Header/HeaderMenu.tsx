import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Drawer from 'components/Drawer/Drawer';

export default function HeaderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const buttonVariants = {
        open: {
            transition: {
                duration: 0.3,
            },
        },
        closed: {
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <div className="relative col-span-3 flex items-center ">
            <motion.button
                onClick={toggleMenu}
                className="w-16 max-h-12 h-full  flex flex-col justify-between p-1 rounded-sm focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={buttonVariants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
            >
                <motion.span
                    className="w-full h-1 bg-whiskey-500 rounded-sm"
                    animate={{
                        transition: { duration: 0.5 },
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 16 : 0,
                    }}
                />
                <motion.span
                    className="w-full h-1 bg-whiskey-500 rounded-sm"
                    animate={{
                        transition: { duration: 0.5 },
                        opacity: isOpen ? 0 : 1,
                    }}
                />
                <motion.span
                    className="w-full h-1 bg-whiskey-500 rounded-sm"
                    animate={{
                        transition: { duration: 0.5 },
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -20 : 0,
                    }}
                />
            </motion.button>
            <Drawer className='translate-y-24' isOpen={isOpen} onClose={() => setIsOpen(false)}>

            </Drawer>

        </div>
    );
}
