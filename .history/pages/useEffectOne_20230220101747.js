
import Link from "next/link"
import { useEffect, useState } from "react"

export default function useEffectOne() {

    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })
    retur
        <>
            <Link href="/">Home</Link>

            <div>
                useEffectOne
            </div>
            <div>

            </div>
        </>
    )
}