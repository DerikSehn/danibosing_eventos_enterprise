import Container from "components/Container/Container";
import TransitionSection from "components/TransitionSection/TransitionSection";
import Waveform from "components/Wave/Wave";
import { Text } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (<>
        <section className="relative z-1 min-h-screen md:h-[900px] lg:min-h-[auto] flex items-center font-moglan text-whiskey-500  py-[20dvh] md:p-4 md:pb-[20dvh]" >
            <video disablePictureInPicture id="background-video" autoPlay loop muted

                className="absolute max-h-screen min-h-screen md:h-[900px] lg:min-h-[auto] w-full inset-0 z-0 object-cover brightness-[.2]"  >
                <source src="/assets/hero/hero.mp4" type="video/mp4" />
            </video>
            <Container className="min-h-[200px]" >

                <h1 className="col-span-12 text-5xl md:text-9xl">

                    O seu evento com

                </h1>
                <h1 className="col-span-12 text-6xl md:text-8xl pt-4">
                    <b >
                        A Nossa Gastronomia
                    </b>
                </h1>
            </Container>
            <TransitionSection />
        </section>

    </>
    )
}
