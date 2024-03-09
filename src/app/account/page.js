'use client'

const page = () => {

    const logout = () => {
        localStorage.removeItem('email')
    }
    
    return (
        <div>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default page