'use server'

import { cookies } from 'next/headers'

const checkCookie = cookies().has('email')

export default checkCookie