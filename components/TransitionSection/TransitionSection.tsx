import Button from 'components/Button/Button'
import { ArrowBigDown, ChevronDown } from 'lucide-react'
import React from 'react'
import MenuPop from './MenuPop'

export default function TransitionSection() {
    return (<div className='absolute inset-x-0 h-16 bg-zeus-800  bottom-0'>
        <MenuPop />
        <ChevronDown size={142} className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 duration-300' />
    </div>

    )
}
