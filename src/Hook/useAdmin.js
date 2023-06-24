import { useEffect, useState } from "react"

export const useAdmin =email => {
    const [isAdmin, setAdmin] = useState(false)
    const [isAdminLoading,setAdminLoading] = useState(true)
    useEffect(() => {
        if(email){
            fetch(`https://bicyle-server-side-indrajit98.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.isAdmin)
                setAdminLoading(false)
            })
        }
    },[email])
    return [ isAdmin, isAdminLoading]
}