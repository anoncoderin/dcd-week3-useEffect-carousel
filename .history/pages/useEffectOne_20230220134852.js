
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '/styles/useStateOne.module.css'

export default function useEffectOne() {

    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    }, [])
    return (
        <>
            <div className={styles.aligncenter}>
                <Link href="/">Home</Link>

                <div>
                    useEffectOne
                </div>
                <div>

                </div>
            </div>
        </>
    )
}