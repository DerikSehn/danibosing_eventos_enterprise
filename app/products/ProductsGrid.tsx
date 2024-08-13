import Container from 'components/Container/Container';
import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ProductCard from './ProductCard';
import ProductList from './ProductList'
const items = [
    {
        title: 'Finger Food',
        description: 'O carro chefe do seu evento Lorem Ipsum',
        image: '/finger/img_2.jpeg'
    },
    {
        title: 'Buffet',
        description: 'Novidade! Nosso catálogo agora inclui um delicioso buffet, com grelhados, frutos do mar, ...',
        image: '/buffet/img_1.jpg'
    },

];
export default function ProductsGrid() {

    return (
        <span
            data-scroll
            data-scroll-section

            className='relative  z-2 bg-zinc-950 col-span-12 mt-20'>

            <section

                className="relative  min-h-[600px] bg-zinc-950   text-zinc-600 grid lg:grid-cols-12 z-1 my-10">
                <div className='col-span-3'>

                    <ProductList path={`/assets/products/gridLeft`} fileType={'jpeg'} variant='left' />

                </div>

                <span className="col-span-6 container mx-auto text-center flex flex-col p-4 gap-4 isolate">
                    {items.map((item, index) =>
                        <ProductCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            image={`/assets/products${item.image}`}
                        />
                    )}
                </span>
                <div className='col-span-3'>
                    <ProductList path={`/assets/products/gridRight`} fileType={'jpeg'} variant='right' />
                </div>
            </section>

        </span>

    )
}
