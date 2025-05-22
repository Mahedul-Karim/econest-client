import Container from '@/components/common/Container'
import TipsForm from '@/components/tips/TipsForm'
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import React from 'react'

const ShareTip = () => {
  return (
    <ProtectedRoutes>
      <main className='py-8 md:py-16 bg-foreground dark:bg-background'>
        <Container className='p-6 rounded-xl bg-background dark:bg-foreground'>
          <h2 className='font-semibold text-dark text-center xs:text-2xl text-xl'>Share a Garden Tip</h2>
          <div className='mt-8'>
            <TipsForm  />
          </div>
        </Container>
      </main>
    </ProtectedRoutes>
  )
}

export default ShareTip