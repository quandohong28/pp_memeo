import { useEffect } from "react"

export default function Login() {
    useEffect(() => {
        fetch('http://localhost:8000/api/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>Login</div>
    )
}
