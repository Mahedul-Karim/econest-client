import ProtectedRoutes from '@/routes/ProtectedRoutes'
import React from 'react'

const MyTips = () => {
  return (
    <ProtectedRoutes>MyTips</ProtectedRoutes>
  )
}

export default MyTips