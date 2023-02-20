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
             width={100}
             height={100}
            />

<Image
             src={"/imagesIconsCarouselweek8/icons/Arrow.png"}
             alt={"/imagesIconsCarouselweek8/icons/leftArrow.png"}
             width={100}
             height={100}
            />

        </div>
        </>
    )
}