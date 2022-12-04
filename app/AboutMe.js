'use client'
import Image from "next/image";
import CardOfItem from "./CardOfItem";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {useCallback} from "react";

export default function AboutMe() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div  id="works">
            <span className=""><h2 className="text-4xl">My works</h2></span>
            <div className="embla mt-12 relative">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">

                            <CardOfItem realLink={`https://sagay.ru`}
                                        descAboutTheDoneWork={`This is my first complete freelance website`}
                                        descOfWebsite={`The first pizza and rolls restouran in Danilov`}
                                        linkToWebsite="sagay.ru"
                                        image={`https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669830510/79b86ef3a30e54558a31ad5b7d6974c4-1536x1023_ehtfwh.jpg`}/>
                        </div>
                        <div className="embla__slide">
                            <CardOfItem realLink={`https://sagay.ru`}
                                        descAboutTheDoneWork={`This is my first complete freelance website`}
                                        descOfWebsite={`The first pizza and rolls restouran in Danilov`}
                                        linkToWebsite="sagay.ru"
                                        image={`https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669830510/79b86ef3a30e54558a31ad5b7d6974c4-1536x1023_ehtfwh.jpg`}/>
                        </div>
                        <div className="embla__slide">
                            <CardOfItem realLink={`https://sagay.ru`}
                                        descAboutTheDoneWork={`This is my first complete freelance website`}
                                        descOfWebsite={`The first pizza and rolls restouran in Danilov`}
                                        linkToWebsite="sagay.ru"
                                        image={`https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669830510/79b86ef3a30e54558a31ad5b7d6974c4-1536x1023_ehtfwh.jpg`}/>
                        </div>
                    </div>
                </div>
                <button
                    className="absolute hover:scale-105 active:scale-100 duration-75 bg-white rounded-[180px] p-3 bg-opacity-30 backdrop-blur top-[40%] left-[5px]"
                    onClick={scrollPrev}>
                    <Image src={`/left.svg`} width={40} height={40}/>
                </button>
                <button
                    className="absolute hover:scale-105 active:scale-100 duration-75 rotate-180 rounded-[180px] p-3 bg-opacity-30 backdrop-blur bg-white top-[40%] right-[5px]"
                    onClick={scrollNext}>
                    <Image src={`/left.svg`} width={40} height={40}/>
                </button>
            </div>


            {/* <Image width={60} className="rounded-[180px]" height={60} src={`https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669828242/photo_2022-09-17_00-36-08_cut-photo.ru_mq2pgq.png`}/>     */}
        </div>
    )
}
