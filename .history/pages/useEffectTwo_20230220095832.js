import Link from "next/link"
import { useEffect } from "react";

export default function useEffectTwo(){
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        console.log
    })
    return(
        <>
        <Link href="/">Home</Link>
        <div>
            useEffect Two
        </div>
        </>
    )
}