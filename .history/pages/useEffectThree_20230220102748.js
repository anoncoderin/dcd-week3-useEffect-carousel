import Link
 from "next/link"
import { useState } from "react";
export default function useEffectThree(){
    const [number, setNumber]= useState(0);

    const [value, setValue]= useState(-10);
    
    useEffect(())

    return(
        <>
        <Link href="/">Home</Link>
        <div>
            <button>Click Here</button>
        </div>
        <div>
            useStateThree
        </div>
        <div>

        </div>
        </>
    )
}