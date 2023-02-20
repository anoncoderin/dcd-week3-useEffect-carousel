import Link from "next/link"
import { useState, useEffect } from "react"
import styles from '/styles/useEffectThree.module.css'


export default function useEffectThree(){
    const [number, setNumber]= useState(0);

    const [value, setValue]= useState(-10);
    
    useEffect(()=>{
        setValue(value + 10);
    }, [number])

    return(
        <>
        <div c
        <Link href="/">Home</Link>
        <div>
            <button onClick={()=> setNumber(number + 1)}>Click Here</button>
        </div>
        <div>
            useStateThree
        </div>
        <div>
            {value}
        </div>
        </>
    )
}