import { useEffect, useState } from "react";

export const useToken = email => {
    // console.log(email);
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://bicyle-server-side-indrajit98.vercel.app/jwt?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.access_token) {
                        localStorage.setItem('access_token', data.access_token)
                        setToken(data.access_token)
                    }
                });
        }

    }, [email]);
    return [token];
}