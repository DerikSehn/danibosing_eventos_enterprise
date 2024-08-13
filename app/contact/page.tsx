"use client"
import Gmap from 'components/GoogleMap/Gmap'
import envUtil from 'public/enUtil'
import React from 'react'

export default function ContactPage() {

    const { address, email, phoneNumber } = envUtil

    return (<div className='container mx-auto  grid grid-cols-12 '>

        <section className="col-span-12 flex flex-col items-center justify-center py-20 bg-gradient-to-b from-gray-100 to-gray-50">
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">Contato</h2>
        </section>
        <section className="col-span-12 flex flex-col items-center justify-center py-20 bg-gradient-to-b from-gray-100 to-gray-50">

            <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-medium mb-5 text-gray-800">Endereço</p>
                    <p className="text-gray-700">{address}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-medium mb-5 text-gray-800">Telefone</p>
                    <p className="text-gray-700">{phoneNumber}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-medium mb-5 text-gray-800">E-mail</p>
                    <a className="text-gray-700" href="mailto:contato@danibosing.com.br">{email}</a>
                </div>
            </div>
            <div className='col-span-12 w-full my-4'>
                <Gmap />
            </div>

        </section>

    </div>
    )
}
