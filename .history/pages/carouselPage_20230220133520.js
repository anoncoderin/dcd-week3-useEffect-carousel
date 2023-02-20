import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from 'carouselPage.module.css'

export default function CarouselPage(){
    return(
    <>
    <Link href="/">Home</Link>
    <Carousel/>
    </>
    )
}