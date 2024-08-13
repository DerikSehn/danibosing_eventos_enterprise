import Scroller from 'components/Scroller/Scroller';
import Image from 'next/image';
import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { twJoin, twMerge } from 'tailwind-merge';

const CONTAINER_VARIANTS = (gridSize: number) => ({
    left: 'col-span-' + gridSize,
    right: 'col-span-' + (3 - gridSize)
})

const DATA_SPEED = (gridSize: number) => ({
    left: 3 * gridSize,
    right: 3 * (3 - gridSize)
})

const ARRAY_SIZE = (gridSize: number) => ({
    left: 8 / gridSize,
    right: 8 / (3 - gridSize)
}
)

const ProductList = ({ path, fileType, variant }: { path: string, fileType: string, variant: 'left' | 'right' }) => {
    try {

        return (

            <div
                data-scroll data-scroll-section
                className='grid grid-cols-3 gap-6'>
                {[1, 2].map((gridSize, idGrid) =>
                    <div
                        key={gridSize}

                        data-scroll
                        data-scroll-speed={DATA_SPEED(gridSize)[variant]}
                        className={twMerge(`relative flex flex-col col-span-2`,
                            CONTAINER_VARIANTS(gridSize)[variant]
                        )}
                    >
                        {Array.from({ length: ARRAY_SIZE(gridSize)[variant] }).map((_, index) => (
                            <div
                                key={index}
                                className="mb-8"
                            >
                                <Image
                                    src={`${path}/img_${(idGrid + 1) * (index + 1)}.${fileType}`}
                                    alt={`Product ${index + 1}`}
                                    height={150}
                                    quality={100}
                                    width={80}
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

        );
    }
    catch (e) {
        throw e
    }
};

export default ProductList;
