import Image from "next/image"
export default function Carousel(){

    return(
        <>

        <div style={{
            backgroundImage:"url(/imagesIconsCarouselweek8/carousel-images/0.jpg)",
            backgroundSize:'cover',
            backgroundRepeat:"no-repeat",
            width:500,
            height:300

        }}>
            <Image
             src={"/imagesIconsCarouselweek8/icons/leftArrow.png"}
             alt={"/imagesIconsCarouselweek8/icons/leftArrow.png"}
             width={30}
             height={30}
             onClick={()=> changeImage("backward")}
            />

<Image
             src={"/imagesIconsCarouselweek8/icons/rightArrow.png"}
             alt={"/imagesIconsCarouselweek8/icons/rightArrow.png"}
             width={30}
             height={30}
             
            />

        </div>
        </>
    )
}