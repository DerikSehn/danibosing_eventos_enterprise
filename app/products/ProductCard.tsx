import Image from 'next/image';
import React from 'react';

const ProductCard = ({ title, description, image }: { title: string, description: string, image: string }) => {
    return (
        <div data-scroll data-aos='fade' data-aos-offset='-300' className="w-full relative z-1 flex flex-col justify-between gap-5 rounded-2xl p-4 min-h-[300px]">
            <h3 className="absolute mx-4 rounded-2xl left-0 top-0 w-auto p-5 z-10 text-3xl font-moglan  text-left text-whiskey-300 bg-oregon-600">
                <b>{title}</b>
            </h3>
            <span
            >
                <Image
                    objectFit='cover'
                    src={image}
                    alt={title}
                    fill
                    /* 
                    width={300}
                    height={400} */
                    className='max-w-[95%] m-auto rounded-2xl inset-8 z-0 brightness-75' />
            </span>
            <p className="absolute mx-4 opacity-90 rounded-2xl right-0 bottom-0 w-auto p-2 items-center z-10  text-whiskey-200 bg-zeus-700 text-right font-montserrat text-xl max-w-[300px]">
                {description}
            </p>
        </div>
    );
};

export default ProductCard;
