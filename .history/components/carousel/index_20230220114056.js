import Image from "next/image"
import { useState } from "react"
export default function Carousel(){
    const [img, setImg]= useState(0);

    const changeImage= (change)=>{
        if(change=="backward"){
            setImg(img - 1);
            if (img == 0){
                setImg(5);
            }
            console.log(img);
        }else if (change=="forward"){
            setImg(img + 1);
            if (img == 5){
                setImg(0);
            }
            console.log(img);
        }
    }
    return(
        <>

        <div style={{
            backgroundImage:"url(/imagesIconsCarouselweek8/carousel-images/.jpg)",
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
             onClick={()=> changeImage("forward")}
            />

        </div>
        </>
    )
}