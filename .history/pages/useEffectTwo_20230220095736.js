import Link from "next/link"

export default function useEffectTwo(){
    const [number, setNumber] = useState(0);
    return(
        <>
        <Link href="/">Home</Link>
        <div>
            useEffect Two
        </div>
        </>
    )
}