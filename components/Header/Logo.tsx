import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ src, alt, link, height = 80, width = 80, className, linkProps }: { src: string, alt: string, link: string, height?: number, width?: number, className?: string, linkProps: string }) => {
    return (
        <Link href={link} target='_blank' className={linkProps} >
            <Image src={src} alt={alt} height={height} width={width} className={className} />

        </Link>
    );
};

export default Logo;
