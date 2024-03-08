'use server'

import { cookies } from 'next/headers'

const checkCookie = () => {
    const hasCookie = cookies().has('email')
    return hasCookie
}

export default checkCookie