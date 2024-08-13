import React from 'react'

export default function Avatar({ src, onClick }: { src: string, onClick?: () => void }) {
    return (
        <div onClick={onClick} className='cursor-pointer'>
            <img src={src} className='w-10 h-10 rounded-full' />
        </div>
    )
}
