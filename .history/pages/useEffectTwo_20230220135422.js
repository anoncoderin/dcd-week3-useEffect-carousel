import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '/styles'

export default function useEffectTwo(){
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        console.log(number);
        setNumber(number + 50);
    },[])
    return(
        <>
        <div c
        <Link href="/">Home</Link>
        <div>
            useEffect Two
        </div>
        <div>
            {number}
        </div>
        </>
    )
}