import React, { useRef } from 'react'
import { LocomotiveScrollProvider, LocomotiveScrollProviderProps } from 'react-locomotive-scroll';

export default function Scroller({ children, options }: { children: any, options?: LocomotiveScrollProviderProps }) {
    const ref = useRef(null);
    return (
        <LocomotiveScrollProvider {...options} watch={[]} >
            {React.cloneElement(children, { ref, 'data-scroll-container': true, 'data-scroll': true })}
        </LocomotiveScrollProvider>
    )
}
