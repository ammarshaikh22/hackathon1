import React from 'react'
import Heading from '@/components/Heading'
import Login from '@/components/Login'
import Logos from '@/components/Logos'
const LoginPage = () => {
    return (
        <main>
            <Heading heading='My Account' />
            <Login />
            <Logos />
        </main>
    )
}

export default LoginPage