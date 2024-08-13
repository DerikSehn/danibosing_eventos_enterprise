import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const Drawer = ({ isOpen, onClose, children, className }: { isOpen: boolean, onClose: () => void, children: any, className?: string }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickAway);
        } else {
            document.removeEventListener('click', handleClickAway);
        }
        return () => {
            document.removeEventListener('click', handleClickAway);
        };
    }, [isOpen]);

    const handleClickAway = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.drawer-content')) {
            onClose();
        }
    };

    const handleAnimationComplete = () => {
        setAnimationComplete(true);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={twMerge("fixed inset-y-0   left-0 w-full lg:h-72 bg-zeus-800 shadow z-50 drawer-content", className)}
                    initial={{ height: 0 }}
                    onAnimationComplete={handleAnimationComplete}

                    animate={{ height: '', transition: { duration: 0.5 }, }}
                    exit={{ height: 0 }}
                >
                    {animationComplete && children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Drawer;
