'use client'
import Image from "next/image";
import CardOfItem from "./CardOfItem";
import useEmblaCarousel from 'embla-carousel-react'

export default function AboutMe() {
    const [emblaRef] = useEmblaCarousel()
  return (
    <div>
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
            <div className="embla__slide">
            <CardOfItem realLink={`https://sagay.ru`} descAboutTheDoneWork={`This is my first complete freelance website`} descOfWebsite={`The first pizza and rolls restouran in Danilov`} linkToWebsite="sagay.ru" image={`https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669830510/79b86ef3a30e54558a31ad5b7d6974c4-1536x1023_ehtfwh.jpg`}/>
        

            </div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
      </div>
    </div>
        
        
        {/* <Image width={60} className="rounded-[180px]" height={60} src={`https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669828242/photo_2022-09-17_00-36-08_cut-photo.ru_mq2pgq.png`}/>     */}
    </div>
  )
}
