import LoginForm from '@/components/auth/LoginForm'
import Container from '@/components/common/Container'
import React from 'react'

const Logins = () => {
  return (
    <main className='bg-foreground dark:bg-background' >
        <Container className='py-8 md:py-16'>
            <LoginForm />
        </Container>
    </main>
  )
}

export default Logins