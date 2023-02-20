import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from 'age.module.css'

export default function CarouselPage(){
    return(
    <>
    <Link href="/">Home</Link>
    <Carousel/>
    </>
    )
}