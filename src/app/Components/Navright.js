// 'use server'

import { cookies } from 'next/headers'
import Link from 'next/link'

const Navright = () => {

    const checkCookie = () => {
        const hasCookie = cookies().has('email')
        return hasCookie
    }

    const isLogin = checkCookie()

    return (
        <div>
            {
                isLogin ? null : <div><p><Link href={'/login'} style={{ textDecoration: 'none' }}>Login</Link></p>
                    <p><Link href={'/signup'} style={{ textDecoration: 'none' }}>SignUp</Link></p></div>
            }
        </div>
    )
}

export default Navright