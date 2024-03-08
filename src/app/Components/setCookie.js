'use server'
import { cookies } from 'next/headers'

const setCookie = (email) => {
    cookies().set({
        name: 'email',
        value: email,
        httpOnly: true,
        path: '/'
    })
}

export default setCookie