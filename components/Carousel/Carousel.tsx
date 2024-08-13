"use client"
import React, { useEffect, useRef, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { twMerge } from 'tailwind-merge';

export default function Carousel({ className, children }: { className?: string, children: React.ReactNode }) {

    const size = useWindowSize();

    const [sliderRef] = useKeenSlider({
        loop: true,
        rtl: true,
        slides: {
            perView: size?.width > 768 ? 2 : 1, // Valor padrão para perView
        },
        rubberband: true,
        slideChanged() {
            console.log('slide changed');
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider">
            {React.Children.map(children, (child, index) => (
                <div className={twMerge("keen-slider__slide", className)} key={index}>
                    {child}
                </div>
            ))}
        </div>
    );
}

// Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState<({
        width: number
        height: number
    })>({
        width: 1280,
        height: 1280,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}