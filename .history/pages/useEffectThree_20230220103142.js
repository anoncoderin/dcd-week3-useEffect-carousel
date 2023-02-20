import Link from "next/link"
import { useState, useEffect } from "react"


export default function useEffectThree(){
    const [number, setNumber]= useState(0);

    const [value, setValue]= useState(-10);
    
    useEffect(()=>{
        setValue(value + 10);
    }, [number])

    return(
        <>
        <Link href="/">Home</Link>
        <div>
            <button onClick={()=> setNumber(number )}>Click Here</button>
        </div>
        <div>
            useStateThree
        </div>
        <div>

        </div>
        </>
    )
}