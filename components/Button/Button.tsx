import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';


interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outlined' | 'text'; // Adicionei 'text' como uma variante possível
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

/* @ts-ignore */
const gradients: { [key in ButtonProps['variant']]: { initial: string; final: string } } = {
    primary: { initial: '#FFA500', final: '#FFD700' },
    secondary: { initial: '#87CEEB', final: '#4682B4' },
    outlined: { initial: '#FFA50000', final: '#FFD70000' },
    text: { initial: 'transparent', final: 'transparent' }, // Adicionando gradiente transparente para a variante 'text'
};

/* @ts-ignore */
const gradientsWhileHover: { [key in ButtonProps['variant']]: { initial: string; final: string } } = {
    primary: { initial: '#FF8C00', final: '#FFD700' },
    secondary: { initial: '#4682B4', final: '#4169E1' },
    outlined: { initial: '#FFA50020', final: '#FFD70020' },
    text: { initial: 'transparent', final: 'rgba(0,0,0,0.1)' }, // Adicionando cor de fundo semi-transparente para a variante 'text' no hover
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children, className }) => {
    // Determinando as classes com base na variante
    const buttonClasses = twMerge(
        `rounded-3xl p-2`,
        variant === 'outlined' ? `border border-zeus-300 text-whiskey-400` : '', // Adicionando classes de contorno se for a variante 'outlined'
        className,
    );

    return (
        <motion.button
            className={buttonClasses}
            onClick={onClick}

            whileHover={{
                boxShadow: `0px 0px 10px ${gradientsWhileHover[variant].final}`, // Alterando a sombra durante o hover
                backgroundImage: `linear-gradient(to top left, ${gradientsWhileHover[variant].initial}, ${gradientsWhileHover[variant].final})`
            }}
            whileTap={{
                scale: 0.98,
            }}
            transition={{ duration: .3 }}
            style={{
                // Usando o gradiente correspondente à variante
                backgroundImage: `linear-gradient(to top left, ${gradients[variant].initial}, ${gradients[variant].final})`,
                transition: 'background-image 0.2s ease',
            }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
