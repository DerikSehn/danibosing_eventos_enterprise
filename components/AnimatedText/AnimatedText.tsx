"use client"
import React from 'react';
import { motion } from 'framer-motion';
import splitRegex from '@/utils/splitRegex';
import { twMerge } from 'tailwind-merge';

interface AnimatedTextProps {
    text: string;
    textColor?: string;
    fontSize?: string;
    animationDuration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, textColor = 'text-white', fontSize = 'text-5xl', animationDuration = 0.5 }) => {
    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 },
    };

    const headingChars = splitRegex(text);

    return (
        <motion.h1
            initial='hidden'
            whileInView='reveal'
            transition={{ staggerChildren: 0.02 }}
            className={twMerge(
                `font-montagu bg-clip-text text-transparent bg-gradient-to-tl `,
                `lg:${fontSize} ${fontSize} ${textColor}`
            )}
        >
            {headingChars.map((char, index) => (
                <motion.span
                    transition={{
                        duration: animationDuration,
                    }}
                    variants={charVariants}
                    key={`${char}${index}`}
                >
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default AnimatedText;
