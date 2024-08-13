"use client"
import Header from "../components/Header/Header"
import Hero from "./Hero"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useEffect, useRef } from "react"
import Products from "./products/Products"
import Depositions from "./Depositions"
import AOS from 'aos';
import 'aos/dist/aos.css';
import YourWaySection from "./YourWaySection"
import ProductsGrid from "./products/ProductsGrid"
import Scroller from "components/Scroller/Scroller"
import { useRouter } from "next/router"
import TransitionSection from "components/TransitionSection/TransitionSection"
import Footer from "@/components/Footer/Footer"

export default function Home() {

  const ref = useRef(null)
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    })
  }, [])


  return (
    <Scroller
      options={
        {
          containerRef: ref,
          watch: [],
          options: { smooth: true },
          onLocationChange: scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
      }
    >
      <main ref={ref} className="relative min-h-[100dvh] w-full">
        <Header />
        <Hero />
        <Products />
        <Footer />
      </main>
    </Scroller>


  )
}
