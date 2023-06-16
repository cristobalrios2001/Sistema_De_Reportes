'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import { UserProfile } from "../config/interfaces"
const Profile: React.FC = () => {

    const token = localStorage.getItem('token');

    if(!token){
        return <h1>Not Logged</h1>
    }
    return(
        <div>
            <h1>
                Profile
            </h1>
        </div>
    )
    /*
    const  [user, setUser] = useState<UserProfile>({} as UserProfile)
    useEffect(() => {
        const getProfile = async () =>{
            const ENDPOINT = 'http://localhost:3000/users/profile'
            const config = {
            headers: {
                Autorization: 'Bearer ${token}'
            }
        }

        const response = await axios.get(ENDPOINT, config)
        const dataResponse: UserProfile = response.data
        setUser(dataResponse)
        }
        const token = localStorage.getItem('token')
        if(!token){
            window.location.href = '/auth/login'
        }
    } ,[])
    
    return <>
        Profile
    </>*/
}

export default Profile