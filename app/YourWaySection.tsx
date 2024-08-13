import Container from 'components/Container/Container'
import Image from 'next/image'
import React from 'react'

export default function YourWaySection() {
    return (
        <Container >
            <span id='YourWaySection'
                className="relative  min-h-[800px] text-zinc-600 grid lg:grid-cols-12 gap-10 z-1 py-6"
                data-scroll-section
                data-scroll
            >

                <Image
                    data-aos="slide-right"
                    data-aos-duration="1000"
                    data-aos-offset="400"
                    className='col-span-3 lg:block hidden rounded-2xl'
                    src={'/img/img_3.jpg'} alt={'imagem exemplo'} height={600} width={400} />
                <span data-aos='fade-up'
                    data-scroll
                    data-scroll-target='#YourWaySection'
                    data-scroll-speed="3"
                    className="col-span-6 text-center flex flex-col rounded-2xl  max-h-[460px]">

                    <h2 className='font-montserrat text-4xl max-w-6xl mx-auto'>
                        <b>O seu evento, do seu jeito.</b>
                    </h2>
                    <sub className="textbold  text-zinc-400 text-2xl font-montserrat mx-auto max-w-xl" >
                        Casamentos, Chás de Fralda, Coquetéis.
                        Nossa equipe se empenha para trazer experiências inesquecíveis
                    </sub>
                    <Image
                        data-aos="fade"
                        data-aos-offset="400"
                        data-aos-duration="1000"
                        fill
                        objectFit='cover'
                        className='col-span-3 rounded-2xl max-h-[300px] mt-auto'
                        src={'/img/img_4.jpg'} alt={'imagem exemplo'} />

                </span>
                <Image
                    data-aos="slide-left"
                    data-aos-offset="400"
                    data-aos-duration="1000"
                    className='col-span-3 lg:block hidden rounded-2xl'
                    src={'/img/img_4.jpg'} alt={'imagem exemplo'} height={600} width={400} />

            </span>
        </Container>
    )
}
