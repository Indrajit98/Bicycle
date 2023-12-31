import { useEffect, useState } from "react"

export const useSeller = email => {
    const [isSeller,setIsSeller] = useState(false)
    const [isSellerLoading,setIsSellerLoading] = useState(true)
    useEffect(() => {
        if(email){
            fetch(`https://bicyle-server-side-indrajit98.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                setIsSellerLoading(false)
            })
        }
    },[email])
    return [ isSeller, isSellerLoading]
}